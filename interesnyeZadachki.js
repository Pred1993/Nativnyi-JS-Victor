//1.
// function makeCounter () {
//     let value = 0
//     return function () {
//         return value++
//     }
// }
// makeCounter()()()

//2. Можно ли у result вызвать методы catch и then
// async function yo() {
//
// }
// let result = yo()


//3.
// function add (a, b) {
//     if (b !== undefined) return a + b
//     return (c) => {
//         return a + c
//     }
// }
//
// console.log(add(2,5))
// console.log(add(2)(5))


//4.
// function foo1 () {
//     return
//     {
//         name: 'Alex'
//     }
// }
//
// function foo2 () {
//     return {
//         name: 'Alex'
//     }
// }
//
// console.log(foo1)
// console.log(foo2)

// 5

// let obj1 = {name: 'Artem'}
// let obj2 = obj1
// obj1 = {name: 'Dima'}
//
// console.log(obj2.name)

//6

// for (let i = 0; i < 10; i++) {
//     setTimeout(()=> {
//         console.log(i)
//     },0)
// }

//7
//
// let obj = {
//     name: 'Artem',
//     age: 25,
//     city: 'Lida',
//     country: 'Belarus'
// }
//
// let arr = ['a', 'b', 'c']
// console.log(Object.keys(arr))
// console.log(Object.getOwnPropertyNames(arr))
