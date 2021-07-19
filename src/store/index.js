import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
		paymentsList: [],
		categoryList: [],
	},
    mutations: {
		setPaymentsListData (state, payload) {
			state.paymentsList = payload;
		},
		addDataToPaymentsList (state, payload) {
			state.paymentsList.push(payload);
		},
		setCategories (state, payload) {
			if (!Array.isArray(payload)) {
				payload = [payload]
			}
			state.categoryList.push(...payload)
		},
	},
    getters: {
		getPaymentsList: state => state.paymentsList,
		getFullPaymentValue: state => {
			return state.paymentsList
				.reduce((res, cur) => res + cur.value, 0)
		},
		getCategoryList: state => state.categoryList,
	},
    actions: {
		fetchData({ commit }) {
			return new Promise((resolve) => {
					// имитируем работу с сетью, ставим задержку получения данных в 2 секунды
					setTimeout(()=>{
						const items = []
						for(let i= 1; i< 50; i++){
							items.push({
								date: "23.12.2020",
								category: "Sport",
								value: i,
								id: i
							})
						}
						resolve(items)
					},1000)
				})
				.then(res => {
					// запускаем изменение состояния через commit
					commit('setPaymentsListData', res)
				})
		},
		fetchCategories ({ commit }) {
			return new Promise((resolve) => {
					// имитируем работу с сетью
					setTimeout(() => {
						resolve(['Food', 'Transport', 'Education', 'Entertainment'])
					}, 1000)
				})
				.then(resolve => {
					// запускаем изменение состояния через commit
					commit('setCategories', resolve)
				})
		},
	},
});