<template>
	<div>
		<Button @clicked="clicked" />
		<AddPayment @addNewPayment="addData" v-if="visible" />
		<SelectCategories :categories="categories" />
		<br />
		<PaymentsDisplay :list="currentElements" />
		<Pagination :cur="curPage"
					:n="n"
					:length="paymentsList.length"
					@paginate="onChangePage"/>
	</div>
</template>


<script>
	import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
	import AddPayment from "@/components/AddPayment.vue";
	import Button from "@/components/Button.vue";
	import SelectCategories from "@/components/SelectCategories.vue";
	import Pagination from '@/components/Pagination.vue';
	import { mapGetters, mapMutations, mapActions } from 'vuex';

	export default {
		name: "Dashboard",
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
			},
			setPage () {
				this.page = location.pathname.slice(1);
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
			this.setPage();
			const links = document.querySelectorAll('a')
			links.forEach(link => {
				link.addEventListener('click', event => {
					event.preventDefault();
					history.pushState({}, '', link.href);
					this.setPage();
				})
			})
			window.addEventListener('popstate', this.setPage)
		}
	}
</script>

<style lang="scss" scoped>

</style>