yield是ES6的新关键字，使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的return关键字。

yield关键字实际返回一个IteratorResult（迭代器）对象，它有两个属性，value和done，分别代表返回值和是否完成。

yield无法单独工作，需要配合generator(生成器)的其他函数，如next，懒汉式操作，展现强大的主动控制特性

```js
function * createIterator() {
    let first = yield 1;
    let second = yield first + 2; // 4 + 2 // first =4 是next(4)将参数赋给上一条的
    yield second + 3;             // 5 + 3
}
let g = createIterator();
console.log(g.next());    // "{ value: 1, done: false }"
console.log(g.next(4));   // "{ value: 6, done: false }"  传入的参数4会作为yield的返回值放到上次的暂停处。
console.log(g.next(5));   // "{ value: 8, done: false }"
console.log(g.next());    // "{ value: undefined, done: true }"
```

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);// 移交执行权
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

```js
function *yieldAndReturn() {
    yield "Y";
    return "R";//显式返回处，可以观察到 done 也立即变为了 true
    yield "unreachable";// 不会被执行了
  }
  
  var gen = yieldAndReturn()
  console.log(gen.next()); // { value: "Y", done: false }
  console.log(gen.next()); // { value: "R", done: true }
  console.log(gen.next()); // { value: undefined, done: true }  返回"R"之后就直接没了。
```

