#!/bin/sh
# Docker entrypoint for Hydrogen dev server
# Restores node_modules from backup when anonymous volume is empty,
# then disables pnpm deps-status check to avoid re-install on every run.

# Restore node_modules if the anonymous volume is empty
if [ ! -d "/app/node_modules/.pnpm" ]; then
  cp -a /app/.node_modules /app/node_modules
fi

# Disable pnpm deps-status check (volume mounts always make node_modules look stale)
export PNPM_DEPS_STATUS_DISABLED=true

exec pnpm "$@"
