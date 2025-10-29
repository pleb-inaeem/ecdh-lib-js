# Advanced ECDH Library

A modern, high-performance Elliptic Curve Diffie-Hellman (ECDH) library for JavaScript/TypeScript with support for multiple curves, key derivation functions, and integrated encryption.

## Features

- **Multiple Elliptic Curves**: P-256, P-384, P-521, Curve25519, secp256k1, Brainpool curves
- **Advanced KDFs**: HKDF, PBKDF2, Scrypt, Argon2, ANSI X9.63, Concat KDF
- **Integrated Encryption**: ECIES, AES-GCM, ChaCha20-Poly1305
- **Key Management**: HD Keys (BIP32-like), multiple export formats (PEM, DER, JWK)
- **Performance**: WebAssembly acceleration, batch operations, hardware support
- **Security**: Side-channel resistant, secure defaults, comprehensive validation
- **Cross-Platform**: Node.js, Browser, React Native, Electron
- **TypeScript**: Full type definitions included

## Installation

```bash
npm install @ecdh/core
```

## Quick Start

```javascript
import { ECDH } from '@ecdh/core';

// Generate key pairs
const alice = new ECDH('P-256');
const aliceKeys = await alice.generateKeyPair();

const bob = new ECDH('P-256');
const bobKeys = await bob.generateKeyPair();

// Compute shared secrets
const aliceSecret = await alice.computeSharedSecret(
  aliceKeys.privateKey,
  bobKeys.publicKey
);

const bobSecret = await bob.computeSharedSecret(
  bobKeys.privateKey,
  aliceKeys.publicKey
);

// Both secrets are identical
console.log(aliceSecret.equals(bobSecret)); // true

// Derive encryption key
const key = await alice.deriveKey(aliceSecret, {
  kdf: 'hkdf',
  hash: 'sha256',
  length: 32
});
```

## Documentation

Full documentation is available at [https://ecdh-lib.dev](https://ecdh-lib.dev)

- [Getting Started Guide](./docs/getting-started.md)
- [API Reference](./docs/api.md)
- [Security Best Practices](./docs/security.md)
- [Examples](./examples/)

## Project Status

This project is currently in active development. See [ADVANCED_EPICS.md](./ADVANCED_EPICS.md) for the complete roadmap.

### Current Phase: Planning & Setup

### Roadmap

- **Phase 1 (MVP)**: Core cryptographic primitives, basic key management
- **Phase 2 (Advanced)**: ECIES, HD Keys, WASM acceleration
- **Phase 3 (Enterprise)**: Multi-party, cloud integration, advanced security
- **Phase 4 (Polish)**: Mobile support, documentation, community

## Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

## Security

Security is our top priority. If you discover a security vulnerability, please email security@example.com.

See [SECURITY.md](./SECURITY.md) for our security policy.

## License

MIT License - see [LICENSE](./LICENSE) for details

## Credits

Built with ❤️ by the ECDH team
