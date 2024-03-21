<template>
	<main id="userLayout" class="user-layout-wrapper">
		<div class="container">
			<router-view />
		</div>
	</main>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
	#userLayout.user-layout-wrapper {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;

		.container {
			width: 100%;
			min-height: 100%;
			background-size: 100%;
			position: relative;
		}
	}
</style>
