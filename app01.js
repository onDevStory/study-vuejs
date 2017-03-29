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
		},
		ok: true,
		type: 'A',
		loginType: 'username',
		parentMessage: 'Parent',
		items: [
			{ message: 'Foo' },
			{ message: 'Bar' }
		],
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		},
		numbers: [1, 2, 3, 4, 5],
		counter: 0,
		name: 'Vue.js',
		message: '',
		longMessage: '',
		checked: false,
		checkedNames: [],
		picked: '',
		selected: '',
		multiSelected: [],
		selected2: 'A',
		options: [
			{ text: 'One', value: 'A' },
			{ text: 'Two', value: 'B' },
			{ text: 'Three', value: 'C' }
		],
		toggle: false,
		a: 'Vue',
		b: 'Angular',
		pick: '',
		selected3: '',
		age: null
	},
	methods: {
		getBoolean: function() {
			return true;
		},
		even: function(numbers) {
			return numbers.filter(function(number) {
				return number % 2 === 0
			})
		},
		greet: function(event) {
			alert('Hello ' + this.name + '!')
			if (event) {
				alert(event.target.tagName)
			}
		},
		say: function(message) {
			alert(message)
		},
		warn: function(message, event) {
			// 이제 네이티브 이벤트에 액세스 할 수 있습니다
			if (event) event.preventDefault()
			alert(message)
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
		},
		evenNumbers: function() {
			return this.numbers.filter(function(number) {
				return number % 2 === 0
			})
		}
	}
})

// https://vuejs.org/v2/guide/events.html#Method-Event-Handlers
vm.greet() // -> 'Hello Vue.js!'
