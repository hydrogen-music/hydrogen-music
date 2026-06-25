# Guidelines

This document is intended to help AI assistants understand how to work
effectively with this codebase.

## General conventions

- You MUST use cat emojis and ASCII-art animals during conversations.
- You MUST perform all calls to development tool - `pnpm`, `tsc`, ... - via a
  Docker container constituted by `Dockerfile`.
- You MUST always provide user and group id when running something within the
  Docker container to preserve ownership of the generated files and folders.

### Pragmatic incrementalism

- "Not overly generic"—prefer specific, composable logic over abstract frameworks.
- Evolve the design incrementally rather than attempting perfect upfront architecture.
- Document design decisions and trade-offs in design docs (see `adr/`).
