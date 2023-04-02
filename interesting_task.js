// Readme
// 1. Задача на нативную мемоизацию
// 2. Custom bind полностью нативный
// 3. Используя метод call реализовать свой собственный метод bind
// 4. Нативный метод flat

//1. Задача на нативную мемоизацию

// const memoFunction = (fn) => {
//     const cache = {}
//     return (property) => {
//         if (cache[property]) {
//             return cache[property]
//         } else {
//             const result = fn(property)
//             cache[property] = result
//             return result
//         }
//     }
//
// }
//
// const fn = (str = '') => str.toLowerCase()
// const memo = memoFunction(fn)
// console.log(memo('Artem'))
// console.log(memo('Artem'))
// console.log(memo('Dima'))


//2. Custom bind полностью нативный

// const obj = {
//     age: 25,
//     getAge: function (name, city) {
//         return `Меня зовут ${name}, мне ${this.age} лет, я живу в ${city}`
//     }
// }
//
// const obj1 = {
//     age: 30,
// }
//
// Function.prototype.newBind = function (context, ...args) {
//     const thisObj = this
//     return function (...args2) {
//         const id = Symbol('1')
//         context[id] = thisObj
//         const result = context[id](...args, ...args2)
//         delete context[id]
//         return result
//     }
// }
//
// console.log(obj.getAge.newBind(obj1, 'Артём')('Лиде'))
// console.log(obj1, 'obj1')
// console.log(obj, 'obj')

//3. Используя метод call реализовать свой собственный метод bind

// Function.prototype.customBind = function (context, ...args) {
//     debugger
//     const _self = this
//     return function (...args2) {
//         return _self.call(context, ...args, ...args2)
//     }
// }
//
// let obj = {name: 'Hanna'}
//
// let obj2 = {
//     name: 'Yo',
//     sayName: function (x) {
//         return `${this.name} ${x}`
//     }
// }
// console.dir(obj2)
// console.log(obj2.sayName.customBind(obj)(1))

// 4. Написать функцию, которая повторяет функционал метода flat массива на всю глубину.

Array.prototype.customFlat = function () {
    return this.reduce((acc, item) => {
        return Array.isArray(item) ? [...acc, ...item.customFlat()]: [...acc, item]
    }, [])
}
console.log([1, 2, 3, [4, 5, [6,7,[8,9]]]].customFlat())
