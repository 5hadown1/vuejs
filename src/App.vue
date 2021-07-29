<template>
	<div id="app" :class="[$style.wrapper]">
		<header>
			<h1>My personal cost</h1>
			<router-link to="/dashboard">Dashboard</router-link> / 
			<router-link to="/about">About</router-link>
		</header>
		<main>
			<router-view />
		</main>
	</div>
</template>

<script>
	export default {
		name: "App"
	};
</script>

<style lang="scss" module>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>