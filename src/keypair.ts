/**
 * KeyPair class for managing ECDH key pairs
 */

import { KeyFormat, KeyPairData } from './types';

export class KeyPair {
  public publicKey: Buffer;
  public privateKey: Buffer;

  constructor(data: KeyPairData) {
    this.publicKey = data.publicKey;
    this.privateKey = data.privateKey;
  }

  /**
   * Export public key in specified format
   */
  exportPublic(format: KeyFormat = 'raw'): string | Buffer {
    // TODO: Implement export
    throw new Error('Not implemented yet');
  }

  /**
   * Export private key in specified format
   */
  exportPrivate(format: KeyFormat = 'raw'): string | Buffer {
    // TODO: Implement export
    throw new Error('Not implemented yet');
  }

  /**
   * Import key from specified format
   */
  static async import(data: string | Buffer, format: KeyFormat): Promise<KeyPair> {
    // TODO: Implement import
    throw new Error('Not implemented yet');
  }
}
