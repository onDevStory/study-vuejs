<template>
	<div class="component">
		<h3>You may edit the User here</h3>
		<p>Edit me!</p>
		<button @click="increaseAge">Increase Age - {{ userAge }}</button>
	</div>
</template>

<script>
export default {
	props: {
		userAge: Number
	},
	methods: {
		increaseAge() {
			this.userAge++;
			this.$emit('ageWasEdited', this.userAge);
		}
	}
}
</script>

<style scoped>
div {
	background-color: lightgreen;
}
</style>
