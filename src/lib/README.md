# Lib Directory

This directory contains utility functions, helpers, and service abstractions that are used across the application.

## Structure

- `utils.ts`: General utility functions
- `api/`: API client and related utilities
- `constants/`: Application constants
- `types/`: Shared TypeScript types
- `hooks/`: Custom React hooks that are not tied to specific features

## Best Practices

1. Keep utility functions pure when possible
2. Document complex functions with JSDoc comments
3. Group related utilities in subdirectories
4. Create index.ts files to simplify imports
