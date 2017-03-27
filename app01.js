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
		buttonFlag: false
	},
	methods: {
		getBoolean: function() {
			return true;
		}
	}
})
