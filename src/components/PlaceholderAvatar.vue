<script setup lang="ts">
const props = defineProps<{
	did?: (string | null);
}>();

const avatarSrc = props.did
	? 'https://picsum.photos/seed/' + encodeURIComponent(props.did) + '/200'
	: '';
</script>

<template>
	<a href="#">
		<img
			:src="avatarSrc"
			class="user-avatar"
		/>
	</a>
</template>