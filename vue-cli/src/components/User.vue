<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		{{ name }} / {{ age }}
		<br>
		<button @click="changeName">Change my Name</button>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<user-detail :userName="name" @nameWasReset="name = $event" :resetFn="resetName" :userAge="age"></user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<user-edit :userAge="age" @ageWasEdited="age = $event"></user-edit>
			</div>
		</div>
	</div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
	data: function() {
		return {
			name: 'Max',
			age: 27
		};
	},
	methods: {
		changeName() {
			this.name = 'Anna';
		},
		resetName() {
			this.name = 'Max'
		}
	},
	components: {
		UserDetail,
		UserEdit
	}
}
</script>

<style scoped>
div {
	background-color: lightblue;
}
</style>
