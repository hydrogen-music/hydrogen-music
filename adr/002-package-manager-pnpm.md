# ADR-002: Package Manager — pnpm

**Status:** Accepted
**Date:** 2026-06-24
**Authors:** phil (theGreatWhiteShark)
**Tags:** package-manager, tooling

## Context
The project currently uses Ruby/Bundler (Gemfile). The new Docusaurus-based project needs a Node.js package manager. The project maintainer has specified pnpm as the required package manager as it has a better protection against supply-chain attacks.

## Decision
Use **pnpm ≥ 11.0** as the exclusive package manager for the Docusaurus project.

pnpm 11 requires **Node.js ≥ 22.13**, so the project's minimum Node version is 22 LTS.

## Alternatives Considered
- **npm**: Default Node package manager. Slower disk usage (copies all deps), no strict dependency enforcement.
- **yarn**: Faster than npm, but still copies all dependencies. Yarn 3/PnP is complex and has adoption issues.
- **pnpm** (Selected): Content-addressable storage, hard links, strict dependency resolution, fastest install times, lowest disk usage. Enforced via `.npmrc` (`packageManager=pnpm@11.9.0`) and pinned in `package.json`.

## Consequences
- All CI, Docker, and local dev workflows use pnpm ≥ 11
- `.npmrc` enforces pnpm 11, prevents accidental npm/yarn usage
- `pnpm-lock.yaml` replaces any npm/yarn lock files
- Dockerfile uses `node:22-alpine` and installs pnpm 11 via `npm install -g pnpm@11` (corepack has symlink issues on Alpine)
- `package.json` declares `"engines": { "node": ">=22.13" }`
- Smaller Docker images due to pnpm's content-addressable storage

## References
- [pnpm docs](https://pnpm.io/)
- ADR-001 (Framework choice)
