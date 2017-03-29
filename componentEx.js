// register a global component.
Vue.component('my-component', {
	template: '<div>A custom component!</div>'
})

// create a root instance
new Vue({
	el: '#component-example'
})
