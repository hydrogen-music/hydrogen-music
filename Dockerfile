# Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml .npmrc ./
RUN npm install -g pnpm@11.9.0
RUN CI=true pnpm install --frozen-lockfile --ignore-scripts
COPY . .
RUN pnpm build

# Development serve stage (for local dev)
FROM node:22-alpine AS dev
WORKDIR /app
RUN npm install -g pnpm@11.9.0
COPY package.json pnpm-lock.yaml .npmrc ./
RUN CI=true pnpm install --frozen-lockfile --ignore-scripts
# Backup node_modules so entrypoint can restore it when anonymous volume is empty
RUN cp -a node_modules .node_modules
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
COPY . .
EXPOSE 3000
CMD ["docker-entrypoint.sh", "start"]

# Production serve stage
FROM nginx:alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
