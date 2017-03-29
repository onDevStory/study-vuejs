// register a global component.
Vue.component('my-component', {
	template: '<div>A custom component!</div>'
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
