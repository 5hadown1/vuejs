<template>
	<div id="app" :class="[$style.wrapper]">
		<header>
			<h1>My personal cost</h1>
		</header>
		<main>
			<Button @clicked="clicked"/>
			<AddPayment @addNewPayment="addData" v-show="visible" />
			<SelectCategories :categories="categories" />
			<br />
			<PaymentsDisplay :list="currentElements" />
			<Pagination :cur="curPage"
						:n="n"
						:length="paymentsList.length"
						@paginate="onChangePage"/>
		</main>
	</div>
</template>

<script>
	import PaymentsDisplay from "./components/PaymentsDisplay.vue";
	import AddPayment from "./components/AddPayment.vue";
	import Button from "./components/Button.vue";
	import SelectCategories from "./components/SelectCategories.vue";
	import { mapGetters, mapMutations, mapActions } from 'vuex';
import Pagination from './components/Pagination.vue';

	export default {
		name: "App",
		components: {
			PaymentsDisplay,
			AddPayment,
			Button,
			SelectCategories,
			Pagination
		},
		data: () => ({
			visible: false,
			page: '',
			curPage: 1,
			n: 20,
		}),
		methods: {
			...mapMutations([
				'setPaymentsListData',
				'addDataToPaymentsList'
			]),
			...mapActions([
				'fetchData',
				'fetchCategories'
			]),
			addData(data) {
				this.addDataToPaymentsList(data);
			},
			clicked() {
				this.visible = !this.visible;
			},
			onChangePage(p) {
				this.curPage = p;
			}
		},
		computed: {
			...mapGetters({
				paymentsList : 'getPaymentsList',
				categories: 'getCategoryList'
			}),
			currentElements(){
				const { n, curPage } = this;
				return this.paymentsList.slice(n * (curPage - 1), n * (curPage - 1) + n);
			},
		},
		created() {
			this.fetchData();
			if (!this.categories.length) {
				this.fetchCategories();
			}
		},
		mounted() {
			const page = this.$route.params.page || 1;
			this.curPage = Number(page);
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
</style>