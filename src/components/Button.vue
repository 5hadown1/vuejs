<template>
	<div>
		<button @click="onClick">ADD NEW COST+</button>
	</div>
</template>

<script>
	export default {
		name: "Button",
		data() {
			return {
			}
		},
		methods: {
			onClick() {
				this.$emit('clicked');
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>