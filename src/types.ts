/**
 * Type definitions for ECDH library
 */

export type Curve =
  | 'P-256'
  | 'P-384'
  | 'P-521'
  | 'curve25519'
  | 'secp256k1'
  | 'brainpoolP256r1'
  | 'brainpoolP384r1'
  | 'brainpoolP512r1';

export type HashAlgorithm = 'sha256' | 'sha384' | 'sha512';

export type KDFAlgorithm = 'hkdf' | 'pbkdf2' | 'scrypt' | 'argon2' | 'x963' | 'concat';

export type KeyFormat = 'raw' | 'pem' | 'der' | 'jwk' | 'hex' | 'base64';

export interface KDFOptions {
  kdf: KDFAlgorithm;
  hash?: HashAlgorithm;
  salt?: Buffer;
  info?: Buffer;
  length?: number;
  iterations?: number;
}

export interface ECDHOptions {
  curve?: Curve;
  debug?: boolean;
  acceleration?: 'auto' | 'wasm' | 'js';
}

export interface KeyPairData {
  publicKey: Buffer;
  privateKey: Buffer;
}
