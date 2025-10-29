# Contributing to ECDH Library

Thank you for considering contributing to the ECDH Library! We welcome contributions from the community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/ecdh-lib-js.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`
5. Make your changes
6. Run tests: `npm test`
7. Run linting: `npm run lint`
8. Commit your changes: `git commit -am 'Add new feature'`
9. Push to your fork: `git push origin feature/your-feature-name`
10. Open a Pull Request

## Development Setup

```bash
# Install dependencies
npm install

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint

# Format code
npm run format

# Build the project
npm run build
```

## Code Standards

- Write TypeScript with strict type checking
- Follow existing code style (enforced by ESLint/Prettier)
- Write tests for new features
- Maintain >80% code coverage
- Document public APIs with JSDoc
- Update README and docs as needed

## Commit Messages

Follow conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `test:` Test additions or changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `chore:` Build process or tooling changes

Example: `feat: add Curve25519 support`

## Testing

- Write unit tests for all new code
- Ensure all tests pass before submitting PR
- Add integration tests for new features
- Test edge cases and error conditions

## Pull Request Process

1. Update documentation for any API changes
2. Add tests for new functionality
3. Ensure all tests pass and coverage is maintained
4. Update CHANGELOG.md (if applicable)
5. Request review from maintainers
6. Address review feedback
7. Squash commits if requested

## Code Review

All submissions require review. We use GitHub pull requests for this purpose.

## Questions?

Feel free to open an issue for questions or discussion.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
