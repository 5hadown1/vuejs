<template>
	<div>
		<input v-model="date" placeholder="date" />
		<input v-model.trim="category" placeholder="category" />
		<input v-model.number="value" type="number" placeholder="value" />
		<button @click="onClick">Add Data</button>
	</div>
</template>

<script>
	export default {
		name: "AddPayment",
		data() {
			return {
				date: "",
				category: "",
				value: null
			}
		},
		methods: {
			onClick() {
				const { category, value } = this
				const data = {
					date: this.date || this.getCurrentDate,
					category,
					value
				}
				//Вызов события, название события и аргументы
				this.$emit('addNewPayment', data)
			}
		},
		computed: {
			getCurrentDate() {
				const today = new Date()
				const d = today.getDate()
				const m = today.getMonth() + 1
				const y = today.getFullYear()
				return `${d}.${m}.${y}`
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>