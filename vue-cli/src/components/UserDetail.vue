<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User Name: {{ userName }} | reverse: {{ switchName() }}</p>
		<p>User Age: {{ userAge }}</p>
		<button @click="resetName">Reset Name</button>
		<button @click="resetFn()">Reset Name (callback)</button>
	</div>
</template>

<script>
import {
	eventBus
} from '../main';

export default {
	props: {
		userName: {
			type: String,
			// required: true,
			default: 'userName'
		},
		resetFn: Function,
		userAge: Number
	},
	methods: {
		switchName() {
			return this.userName.split('').reverse().join('');
		},
		resetName() {
			this.userName = 'Max';
			this.$emit('nameWasReset', this.userName);
		}
	},
	created: function() {
		eventBus.$on('ageWasEdited', (age) => {
			this.userAge = age;
		});
	}
}
</script>

<style scoped>
div {
	background-color: lightcoral;
}
</style>
