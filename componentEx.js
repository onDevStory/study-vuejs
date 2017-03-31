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

Vue.component('button-counter', {
	template: '<button v-on:click="increment">{{ counter }}</button>',
	data: function() {
		return {
			counter: 0
		}
	},
	methods: {
		increment: function() {
			this.counter += 1
			this.$emit('increment')
		}
	},
})

Vue.component('currency-input', {
	template: `
    <span>
      $
      <input
        ref="input"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)">
    </span>
  `,
	props: ['value'],
	methods: {
		// Instead of updating the value directly, this
		// method is used to format and place constraints
		// on the input's value
		updateValue: function(value) {
			console.log(value)
			var formattedValue = value
				// Remove whitespace on either side
				.trim()
				// Shorten to 2 decimal places
				.slice(0, value.indexOf('.') + 3)
				// If the value was not already normalized,
				// manually override it to conform
			if (formattedValue !== value) {
				this.$refs.input.value = formattedValue
			}
			// Emit the number value through the input event
			this.$emit('input', Number(formattedValue) + 1)
		}
	}
})

Vue.component('currency-input2', {
	template: `
    <div>
      <label v-if="label">{{ label }}</label>
      $
      <input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)"
             v-on:focus="selectAll" v-on:blur="formatValue">
    </div>
  `,
	props: {
		label: {
			type: String,
			default: ''
		},
		value: {
			type: Number,
			default: 0
		}
	},
	mounted: function() {
		this.formatValue()
	},
	methods: {
		updateValue: function(value) {
			var result = currencyValidator.parse(value, this.value)
			if (result.warning) {
				this.$refs.input.value = result.value
			}
			this.$emit('input', result.value)
		},
		formatValue: function() {
			this.$refs.input.value = currencyValidator.format(this.value)
		},
		selectAll: function(event) {
			// Workaround for Safari bug
			// http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
			setTimeout(function() {
				event.target.select()
			}, 0)
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
		},
		total: 0,
		price: 0,
		shipping: 0,
		handling: 0,
		discount: 0
	},
	methods: {
		incrementTotal: function() {
			this.total += 1
		},
		nativeEvent: function() {
			alert('nativeEvent')
		}
	},
	computed: {
		computedTotal: function() {
			return (
				(this.price * 100 + this.shipping * 100 + this.handling * 100 - this.discount * 100) / 100).toFixed(2)
		}
	}
})
