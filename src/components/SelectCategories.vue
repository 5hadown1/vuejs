<template>
	<div>
		<select v-model="selected">
			<option v-for="(option, idx) in categories" :value="option" :key="idx">
				{{ option }}
			</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'SelectCategories',
		props: {
			categories: {
				type: Array,
				default: () => []
			},
		},
		data() {
			return {
				selected: ''
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>