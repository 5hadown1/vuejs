<template>
	<div id="app" :class="[$style.wrapper]">
		<header>
			<h1>My personal cost</h1>
		</header>
		<main>
			<Button @clicked="clicked"/>
			<AddPayment @addNewPayment="addData" v-show="visible"/>
			<br />
			<PaymentsDisplay :list="paymentsList" />
		</main>
	</div>
</template>

<script>
	import PaymentsDisplay from "./components/PaymentsDisplay.vue";
	import AddPayment from "./components/AddPayment.vue";
	import Button from "./components/Button.vue";

	export default {
		name: "App",
		components: {
			PaymentsDisplay,
			AddPayment,
			Button
		},
		data: () => ({
			paymentsList: [],
			visible: false
		}),
		methods: {
			addData(data) {
				this.paymentsList = [...this.paymentsList, data]
			},
			clicked() {
				this.visible = !this.visible;
			},
			fetchData() {
				return [{
						date: "28.03.2020",
						category: "Food",
						value: 169
					},
					{
						date: "20.04.2021",
						category: "Sport",
						value: 400
					},
					{
						date: "28.05.2020",
						category: "Internet",
						value: 200
					}
				];
			}
		},
		created() {
			this.paymentsList = this.fetchData()
		}
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

	.wrapper {}
</style>