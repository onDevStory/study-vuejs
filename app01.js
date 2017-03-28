var array = []

function print(groupTitle, args, collapsed) {
	collapsed ? console.groupCollapsed(groupTitle) : console.group(groupTitle)
	for (idx in args) {
		console.log(args[idx] + '\n')
	}
	console.groupEnd();
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
var vm = new Vue({
	beforeMount: function() {
		this.msg = '안녕하세요.'
		print('beforeMount: this.msg is changed in both model and view.', [this.msg]);
	},
	mounted: function() {
		this.msg = 'HelloWorld.'
		print('beforeMount: this.msg\'s value is changed in model. but not in view.', [this.msg]);
	},
	el: '#example',
	data: {
		msg: 'Hello World.',
		html: {
			aa: '<p>This element has v-html. {{msg}}. data bindings are ignored.</p>'
		},
		id: {
			title: 'title'
		},
		buttonFlag: false,
		isActive: true,
		hasError: true,
		error: null,
		classObject: {
			active: true,
			'text-danger': true,
		},
		classArray: {
			activeClass: 'active',
			errorClass: 'text-danger'
		},
		activeColor: 'red',
		fontSize: 17,
		styleObject: {
			color: 'red',
			fontSize: '13px'
		}
	},
	methods: {
		getBoolean: function() {
			return true;
		}
	},
	filters: {
		capitalize: function(value) {
			if (!value) return '';
			value = value.toString();
			return value.charAt(0).toUpperCase() + value.slice(1);
		},
		append: function(value, item) {
			return value + item;
		}
	},
	computed: {
		// 계산된 getter
		reversedMessage: function() {
			return this.msg.split('').reverse().join('')
		},
		computedClass: function() {
			return {
				active: this.isActive && !this.error,
				'text-danger': this.error && this.error.type === 'fatal'
			}
		},
		computedStyle: function() {
			if (this.isActive) {
				return {
					color: 'blue',
					fontSize: '17px'
				}
			} else {
				return {
					color: 'red',
					fontSize: '20px'
				}
			}
		}
	}
})
