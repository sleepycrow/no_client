import { schnorr } from "@noble/curves/secp256k1";
import { bytesToHex, hexToBytes } from "@noble/hashes/utils";
import { defineStore } from "pinia";

const DID_STORAGE_ITEM_NAME = 'did';
const PRIVKEY_STORAGE_ITEM_NAME = 'privKey';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		did: null as (string | null),
		privKey: null as (string | null),
		pubKey: null as (string | null),
	}),

	actions: {
		prepareAppCredentials(): void {
			this._tryToRecoverExistingAppCredentials();
		},

		_tryToRecoverExistingAppCredentials(): boolean {
			const did = window.localStorage.getItem(DID_STORAGE_ITEM_NAME);
			const privKey = window.localStorage.getItem(PRIVKEY_STORAGE_ITEM_NAME);

			if ((did && did.length > 0) && (privKey && privKey.length > 0)) {
				console.log(`Recovered cached credentials for ${did}!`);
				
				this.setCredentials(did, privKey);

				return true;
			}

			return false;
		},

		setCredentials(did: string, privKey: string): void {
			const privKeyBytes = hexToBytes(privKey);
			const pubKey = schnorr.getPublicKey(privKeyBytes);

			this.did = did;
			this.privKey = privKey;
			this.pubKey = bytesToHex(pubKey);

			window.localStorage.setItem(DID_STORAGE_ITEM_NAME, did);
			window.localStorage.setItem(PRIVKEY_STORAGE_ITEM_NAME, privKey);
		},
	}
});