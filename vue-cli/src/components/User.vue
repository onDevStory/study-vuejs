<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<button @click="changeName">Change my Name (currnet: {{ name }})</button>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<user-detail :user-name="name" @nameWasReset="name = $event" :resetFn="resetName"></user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<user-edit></user-edit>
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
			name: 'Max'
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
