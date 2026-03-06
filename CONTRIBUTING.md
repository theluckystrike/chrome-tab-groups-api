# Contributing to chrome-tab-groups-api

Thanks for your interest in contributing. This document covers the basics.

HOW TO CONTRIBUTE

1. Fork the repository
2. Create a feature branch from main
3. Make your changes
4. Run `npm run build` to verify the TypeScript compiles
5. Run `npm test` to make sure nothing is broken
6. Commit with a clear, descriptive message
7. Open a pull request against main

WHAT TO WORK ON

- Bug fixes
- New TabGroupManager methods that wrap Chrome APIs cleanly
- New preset grouping patterns in TabGroupPresets
- Better TypeScript types
- Documentation improvements
- Test coverage

CODE STYLE

- TypeScript strict mode is enabled
- Static methods on classes, no singletons
- Keep it simple and dependency-free
- Follow the existing patterns in src/groups.ts and src/presets.ts

REPORTING BUGS

Open an issue using the bug report template. Include your Chrome version, extension manifest version, and a minimal reproduction case.

FEATURE REQUESTS

Open an issue using the feature request template. Describe the use case and why the current API does not cover it.

LICENSE

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Maintained by [theluckystrike](https://github.com/theluckystrike) | [zovo.one](https://zovo.one)
