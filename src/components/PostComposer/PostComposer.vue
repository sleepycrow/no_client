<script setup lang="ts">
import { ref } from 'vue';
import PlaceholderAvatar from '../PlaceholderAvatar.vue';
import { useAuthStore } from '@/stores/auth';

const stores = {
	auth: useAuthStore(),
};

const isActive = ref(false);
function toggleActive() {
	isActive.value = !isActive.value;
}
</script>

<template>
	<div class="composer">
    	<div
			:class="{
				'composer__workspace': true,
				'composer__workspace--inactive': !isActive,
				'composer__workspace--active': isActive,
			}"
			@click="toggleActive"
		>
			<div
				v-if="!isActive"
				class="composer__workspace__cta"
			>
    			<span>What's up?</span>
			</div>

			<div v-if="isActive">
				Hello world, I'm active now!
			</div>
		</div>

		<div
			class="composer__avatar"
			aria-hidden
    	>
			<PlaceholderAvatar :did="stores.auth.did" />
    	</div>
	</div>
</template>

<style scoped lang="scss">
.composer {
	display: flex;
	flex-direction: row;
	padding: 0 0 0 var(--total-post-padding);
	margin-bottom: 32px;

	.composer__workspace {
		clip-path: var(--polygon--own-bubble);
		padding: 0 var(--bubble-triangle) 0 0;
		flex: 1 1 auto;
		transition: background-color 0.3s;

		&--inactive {
			background-color: transparent;
			background-image: var(--stripes);

			&:hover {
				background-color: #EEE;
			}
		}

		&--active {
			background-color: #000;
			background-image: none;
			color: #FFF;
		}

		.composer__workspace__cta {
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			color: #000;
			font-size: 1.25rem;
			font-weight: bold;
			width: 100%;
			height: 100%;
		}
	}

	.composer__avatar {
		margin-left: var(--post-avatar-spacing);
	}
}
</style>
