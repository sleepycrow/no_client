<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';

const stores = {
	auth: useAuthStore(),
};

const [ appName, appVersion, appCommitHash, appRepoUrl ] = [ __APP_NAME__, __APP_VERSION__, __APP_COMMIT_HASH__, __APP_REPO_URL__ ];

stores.auth.prepareAppCredentials();
</script>

<template>
	<header>
		<div class="client-name">
			{{ appName }}
		</div>

		<div class="client-version">
			{{ appVersion }} - {{ appCommitHash }} - <a :href="appRepoUrl">(src)</a>
		</div>
	</header>

	<div class="page-container">
		<RouterView />
	</div>
</template>

<style scoped lang="scss">
header {
	width: 100%;
	display: flex;
	justify-content: space-between;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 0.8rem;
	color: #333;
	padding: 0.5rem;
}

.page-container {
	margin-top: 0.5rem;
}
</style>
