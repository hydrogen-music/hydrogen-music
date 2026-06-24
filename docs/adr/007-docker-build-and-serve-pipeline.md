# ADR-007: Docker Build and Serve Pipeline

**Status:** Accepted
**Date:** 2026-06-24
**Authors:** phil (theGreatWhiteShark)
**Tags:** docker, ci, deployment

## Context
The current Dockerfile uses `ruby:2.7.8-slim-bullseye` with Jekyll. Build installs system packages (make, gcc, g++), Ruby gems (commonmarker), then runs `bundle exec jekyll serve`. The image is ~500MB+ and the build is slow.

## Decision
Use a **multi-stage Dockerfile** with Node.js for build and nginx for production serve.

### Dockerfile Design
```dockerfile
# Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN npm install -g pnpm@11.9.0
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Development serve stage (for local dev)
FROM node:22-alpine AS dev
WORKDIR /app
RUN npm install -g pnpm@11.9.0
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install
COPY . .
EXPOSE 3000
CMD ["pnpm", "start"]

# Production serve stage
FROM nginx:alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Note:** `corepack` is not used on Alpine due to symlink permission issues. pnpm is installed via `npm install -g` instead.

### Docker Compose (development)
```yaml
services:
  web:
    build:
      context: .
      target: dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    command: pnpm start
```

### Build Targets
- `docker build --target dev -t hydrogen-music:dev .` — Development with hot reload
- `docker build --target production -t hydrogen-music:prod .` — Production nginx serve
- `docker build -t hydrogen-music .` — Defaults to production (last stage)

### Image Size
- Build stage: ~350MB (node:22-alpine + pnpm deps)
- Production: ~25MB (nginx:alpine + static files)
- Total push: ~25MB (multi-stage, only production stage pushed)

### CI/CD
- GitHub Actions: `pnpm install` → `pnpm build` → deploy `build/` to GitHub Pages

## Consequences
- **Positive:** Multi-stage build produces tiny production images. Alpine base minimizes attack surface. pnpm's content-addressable storage speeds up Docker layer caching. Hot reload in dev mode.
- **Negative:** Node 22 Alpine uses musl libc — some native modules may have issues (not relevant for Docusaurus). Build context must exclude `node_modules` via `.dockerignore`. `corepack` doesn't work on Alpine (symlink permissions), so pnpm is installed via `npm install -g`.
- **Migration:** Dockerfile replaces Ruby-based build entirely. `.dockerignore` needed to exclude `node_modules/`, `build/`, `.docusaurus/`.

## References
- [Node Docker official image](https://hub.docker.com/_/node)
- [Nginx Docker official image](https://hub.docker.com/_/nginx)
- [Current Dockerfile](https://github.com/hydrogen-music/hydrogen-music/blob/main/Dockerfile)
- ADR-001 (Framework choice)
- ADR-002 (Package manager)
