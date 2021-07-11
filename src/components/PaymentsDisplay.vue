<template>
	<div class="payments-list">
		<div v-for="(item, idx) in list" :key="idx">
			{{idx + 1}}-{{ item }}
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
		}
	}
</script>