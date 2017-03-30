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

// create a root instance
new Vue({
	el: '#component-example',
	components: {
		'child-component': Child
	}
})
