<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useTemplateRef } from 'vue';

const stores = {
	auth: useAuthStore(),
};

const didField = useTemplateRef('did-field');
const privKeyField = useTemplateRef('priv-key-field');

function onSaveCredentials() {
	const did = didField.value?.value;
	const privKey = privKeyField.value?.value;

	if (did && privKey) {
		stores.auth.setCredentials(did, privKey);
		window.alert('ok!');
	} else {
		window.alert('no :(');
	}
}
</script>

<template>
	<main class="page page--narrow">
		<h1>Settings</h1>

		<section>
			<h2>Credentials</h2>

			<div class="label-input-pair">
				<label for="did-field">DID:</label>
				<input
					ref="did-field"
					id="did-field"
					type="text"
					:value="stores.auth.did ?? ''"
				/>
			</div>

			<div class="label-input-pair">
				<label for="priv-key-field">Private key:</label>
				<input
					ref="priv-key-field"
					id="priv-key-field"
					type="text"
					:value="stores.auth.privKey ?? ''"
				/>
			</div>

			<div class="label-input-pair">
				<label for="pub-key-field">Public key:</label>
				<input
					id="pub-key-field"
					type="text"
					disabled
					:value="stores.auth.pubKey ?? ''"
				/>
			</div>

			<div class="form-actions">
				<button
					class="btn"
					@click="onSaveCredentials"
				>
					Save
				</button>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>

</style>