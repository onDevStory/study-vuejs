// register a global component.
Vue.component('my-component', {
	template: '<button v-on:click="counter += 1">{{ counter }}</button>',
	data: function() {
		return { counter: 0 }
	}
})

// register a local component
var Child = {
	template: '<div>A local component!</div>'
}

Vue.component('child', {
	// camelCase in JavaScript
	props: ['myMessage'],
	// just like data, the prop can be used inside templates
	// and is also made available in the vm as this.message
	template: '<span>{{myMessage}}</span>'
})

// create a root instance
var vm = new Vue({
	el: '#component-example',
	components: {
		'child-component': Child
	}
})
