// register a global component.
Vue.component('my-component', {
	props: ['initialCounter'],
	template: `
		<div>
			<button v-on:click="counter += 1">{{ counter }}</button> (This type is {{ dataType }})<br>
		</div>
	`,
	data: function() {
		return {
			counter: this.initialCounter || 0
		}
	},
	computed: {
		dataType: function() {
			return typeof this.initialCounter
		}
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
	template: '<span>{{myMessage + \' (this type is \' + typeof myMessage + \')\'}}</span>'
})

Vue.component('exam01', {
	props: ['arrNumber', 'obj'],
	template: `
	  <div>
	    Child arrNumber: {{ arrNumber }}
	    <br> Child obj: {{ obj }} <br>
	    부모도 같이 변함. 주의!!
	    <button v-on:click="arrNumber.push(4)">arrNumber.push(4) - Error</button>
      <button v-on:click="setObjUrl()">set obj.url</button>
	  </div>
	`,
	methods: {
		setObjUrl: function() {
			this.obj.url = 'https://vuejs.org'
		}
	}
})

// create a root instance
var vm = new Vue({
	el: '#component-example',
	components: {
		'child-component': Child
	},
	data: {
		parentMsg: 'Welcome!',
		number: 30,
		arrNumber: [0, 1, 2, 3],
		obj: {
			lang: 'VueJS',
			version: '2.2.0'
		}
	}
})
