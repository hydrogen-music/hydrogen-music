# Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN npm install -g pnpm@11.9.0
RUN pnpm install --frozen-lockfile --config.allow-builds="*"
COPY . .
RUN pnpm build

# Development serve stage (for local dev)
FROM node:22-alpine AS dev
WORKDIR /app
RUN npm install -g pnpm@11.9.0
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --config.allow-builds="*"
COPY . .
EXPOSE 3000
CMD ["pnpm", "start"]

# Production serve stage
FROM nginx:alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
