var array = []

function print(groupTitle, args, collapsed) {
   collapsed ? console.groupCollapsed(groupTitle) : console.group(groupTitle)
   for (idx in args) {
      console.log(args[idx] + '\n')
   }
   console.groupEnd();
}

// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
   String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) {
         return typeof args[number] != 'undefined' ? args[number] : match;
      });
   };
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

var data = { a: 1, _b: 2, $c: 3 }

var vm = new Vue({
   beforeCreate: function() {
      print('beforeCreate: vue instance is just created.')
   },
   created: function() {
      print('created: is called after observing data and initializing events.', ['a is: ' + this.a])
   },
   data: data,
   el: '#example',
})

// $watch 는 인스턴스 메소드 입니다. (But 아래와 같은 경우는, 1회만 호출됨)
vm.$watch('a', function(newVal, oldVal) {
   print('$watch - 값 변화 감지', ['oldVal:' + oldVal + ', newVal: ' + newVal])
})

print('인스턴스가 생성된 이후 원래 데이터 객체는 vm.$data로 접근할 수 있습니다.', [vm.data, vm.$data])

array = []
array.push(vm.$data === vm._data)
array.push(vm.$data === data)
array.push(vm.a === data.a)
array.push(vm.a === vm.$data.a)
print('Vue 인스턴스는 data 객체에 있는 모든 속성을 프록시 처리하므로 vm.a는 vm.$data.a와 동일합니다.', array)

// _ 또는 $로 시작하는 속성은 Vue의 내부 속성 및 API 메소드와 충돌할 수 있으므로
// Vue 인스턴스에서 프록시 되지 않습니다.vm.$data._property로 접근 해야 합니다.
array = []

array.push(vm.a) // 1
array.push(typeof vm._b) // X
array.push(vm.$c) // X

array.push(vm.$data.a) // 1
array.push(vm.$data._b) // 2
array.push(vm.$data.$c) // 3
print('변수 사용 방법', array)

vm.a = 2
print('속성 설정은 원본 데이터에도 영향을 미칩니다.', [data.a]) // 2

data.a = 3
print('...당연하게도', [vm.a])

print('vm.$el === document.getElementById(\'example\')', [vm.$el === document.getElementById('example')])
