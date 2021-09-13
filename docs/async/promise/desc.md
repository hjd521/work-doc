### promise常用api说明
* then：添加成功回调到Promise构造函数的成功回调中，支持链式调用。
* catch：添加失败回调到Pomise构造函数的失败回调中，支持链式调用。
* all：数组参数中所有的promise都成功，才执行成功回调，否则失败回调。
* race：数组中第一个返回的成功即为成功，否则为失败。
* any：promise数组中只要有一个返回成功就是成功。
* allSettled: promise数组中都返回了结果才继续执行
* Promise.resolve(): 将一个对象转化为promise对象
* Promise.reject(): 将一个对象转化为promise对象