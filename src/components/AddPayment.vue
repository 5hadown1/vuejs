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
				category: '',
				value: null
			}
		},
		methods: {
			goToPageDashboard(){
				this.$router.push({
					name: 'Dashboard'
				})
			},
			onClick() {
				const { category, value } = this
				const data = {
					id: new Date().getTime(),
					date: this.date || this.getCurrentDate,
					category,
					value
				}

				if(this.getValueQueryFromRoute && this.getCategoryParamsFromRoute) {
					this.$store.commit('addDataToPaymentsList', data);
					this.goToPageDashboard();
					return
				}

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
			},
			getValueQueryFromRoute() {
				return Number(this.$route.query?.value) ?? null;
			},
			getCategoryParamsFromRoute() {
				return this.$route.params?.category ?? null;
			}
		},
		created(){
			if((!this.getValueQueryFromRoute || !this.getCategoryParamsFromRoute) && this.$route.name !== 'Dashboard'){
				this.goToPageDashboard()
			}
			this.category = this.getCategoryParamsFromRoute;
			this.value = this.getValueQueryFromRoute;
		}
	}
</script>