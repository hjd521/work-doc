### 工作中防止内存泄露的注意事项。
1. 尽可能少地创建全局变量。
2. 防止过度的使用console。
3. 清除定时器。
4. 少用闭包。
``` js
function foo() {
    let local = 123;
    return function() {
        return local;
    }
}
const bar = foo();
console.log(bar()); // -> 123
```
* 在这个示例中，foo函数执行完毕后会返回一个匿名函数，该函数内部引用了foo函数中的局部变量local，并且通过变量bar来引用这个匿名的函数定义，通过这种闭包的方式我们就可以在foo函数的外部作用域中访问到它的局部变量local。一般情况下，当foo函数执行完毕后，它的作用域会被销毁，但是由于存在变量引用其返回的匿名函数，导致作用域无法得到释放，也就导致local变量无法回收，只有当我们取消掉对匿名函数的引用才会进入垃圾回收阶段。
5. 手动清除dom的引用
``` js
const elements = {
    button: document.getElementById('button')
};

function removeButton() {
    document.body.removeChild(document.getElementById('button'));
}
```
* 在这个示例中，我们想调用removeButton方法来清除button元素，但是由于在elements字典中存在对button元素的引用，所以即使我们通过removeChild方法移除了button元素，它其实还是依旧存储在内存中无法得到释放，只有我们手动清除对button元素的引用才会被垃圾回收
#### 如何通过chrome来对内存泄露进行排查？
* 使用memorey工具中的快照以及时间线工具进行查看。参考链接：<https://juejin.cn/post/6947841638118998029#heading-3>