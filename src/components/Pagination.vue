<template>
	<div :class="[$style.wrp]">
		<div @click="onClick(cur - 1)">-</div>
		<div v-for="i in amount"
			:key="i"
			:class="{[$style.active]: cur === i}"
			@click="onClick(i)">{{ i }}</div>
		<div @click="onClick(cur + 1)">+</div>
	</div>
</template>

<script>
	export default {
		props: {
			length: Number,
			n: Number,
			cur: Number
		},
		computed: {
			amount() {
				return Math.ceil(this.length / this.n)
			}
		},
		methods: {
			onClick(p) {
				if (p < 1 || p > this.amount || p === this.cur) {
					return
				}
				this.$emit('paginate', p)
			}
		}
	}
</script>

<style module lang="scss">
	.wrp {
		display: flex;

		&>div {
			padding: 10px;
			cursor: pointer;
			&.active {
				background: #ccc;
			}
		}
	}
</style>