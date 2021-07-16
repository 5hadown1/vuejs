<template>
	<div class="payments-list">
		<div v-for="(item, idx) in list" :key="idx">
			{{idx + 1}}-{{ item }}
		</div>
		<div>
			Total: {{ getFPV }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "PaymentsDisplay",
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {}
		},
		computed: {
			getFPV () {
				return this.$store.getters.getFullPaymentValue;
			}
		}
	}
</script>