### async demo
* 由于async函数中有await命令的语句是同步执行的，就会造成两个独立的异步操作形成继发执行的效果。这样性能是差的，因此我们要做并发执行。
```
// 通过使用Promise.all来实现
function runAsync() {
  let [foo, bar] = await Promise.all([getFoo(),getBar()])
}
// 使用forEach
funciton runAsync() {
  ['foo', bar].forEach( async (item) => {
    await getUrl[item]()
  })
}
// 使用map+for of
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}
// 并行执行异步操作，次序拿到结果
async function logInOrder(urls) {
  // 并发读取远程URL
  const textPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.text();
  });

  // 按次序输出
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}
```
