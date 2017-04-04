<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User Name: {{ userName }} | reverse: {{ switchName() }}</p>
		<button @click="resetName">Reset Name</button>
	</div>
</template>

<script>
export default {
	props: {
		userName: {
			type: String,
			// required: true,
			default: 'userName'
		}
	},
	methods: {
		switchName() {
			return this.userName.split('').reverse().join('');
		},
		resetName() {
			this.userName = 'Max';
			this.$emit('resetName', this.userName);
		}
	}
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
