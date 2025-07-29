<script setup lang="ts">

</script>

<template>
	<nav class="navbar">
		<ul>
			<li>
				<RouterLink
					:to="{ name: 'home' }"
					class="navbar-item"
					active-class="navbar-item--active"
				>
					<span class="material-symbols-sharp">home</span>
				</RouterLink>
			</li>

			<li>
				<RouterLink
					:to="{ name: 'settings' }"
					class="navbar-item"
					active-class="navbar-item--active"
				>
					<span class="material-symbols-sharp">settings</span>
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.navbar {
	display: block;
	position: fixed;
	bottom: 0;
	width: 100%;
	border-top: 1px solid #CCC;
	background-color: #FFF;

	ul {
		list-style-type: none;
		padding: 8px;
		width: 100%;
		margin: 0;
		display: flex;
		justify-content: space-evenly;
	}

	.navbar-item {
		display: block;
		background-color: transparent;
		color: #000;
		width: 48px;
		height: 48px;
		text-align: center;
		transition: background-color 0.1s, color 0.1s;

		.material-symbols-sharp {
			font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
			font-size: 2rem;
			line-height: 48px;
			vertical-align: middle;
		}

		&:hover {
			background-color: #CCC;
		}

		&--active {
			background-color: #000;
			color: #FFF;

			&:hover {
				background-color: #000;
			}
		}
	}
}
</style>