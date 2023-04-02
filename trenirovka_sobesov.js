// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(4)
//     },1000)
// }).then((res) => {
//     return res
// }).then((res) => {
//     console.log(res)
// })
// console.dir(promise)
//
// function increase () {
//     let sum = 0
//     return function () {
//         console.log(sum++)
//     }
// }
//
// const instance1 = increase()
// const instance2 = increase()
// console.log(instance1())
// console.log(instance1())
// console.log(instance1())
// console.log(instance2())
// console.log(instance2())
// console.log(instance2())

// let obj = {
//     name: 'Alex',
//     setName: () => {
//         console.log(this.name)
//     }
// }
// console.log(obj.setName())

// class A {
//     constructor(name) {
//         this.name = name
//     }
//     setName() {
//         debugger
//         console.log(this.name)
//         return console.log(this.name)
//     }
//     setName1 = () => {
//         return console.log(this.name)
//     }
// }
// console.dir(A)
// const men = new A('Alex')
// const men2 = new A('Artem')
// men.setName1()
// console.log(men.setName.call(men2))


// class User {
//     // nameLength = 'star'
//     constructor(value) {
//         this.name = value
//     }
//
//     get nameLength() {
//         return this.name
//     }
//
//     set nameLength(value) {
//         this.name = value
//     }
// }
//
// const alex = new User()
// alex.nameLength
// alex.nameLength = "New Name"
//
// console.log(
//     alex.nameLength
// )

// function Constructor1(name, age) {
//     this.name = name
//     this.age = age
// }
// Constructor1.setName = function () {
//     console.log(this.age)
// }
// Constructor1.prototype.getName = function () {
//     console.log(this.name)
// }
// console.dir(Constructor1)
//
// const instanceConst1 = new Constructor1("Alex", 23)
// console.dir(instanceConst1)
// function Constructor2() {
//
// }
//
// Constructor2.prototype.__proto__ = Constructor1.prototype
// const instanceConst2 = new Constructor2()
// console.dir(instanceConst2)
// console.log(Constructor1.setName.call(instanceConst1))
// Array.prototype.myMap = function () {
//     return 1
// }
// const arr = [1,2,3,4,5]
//
// console.log(arr.myMap())


//_____________________Второй поц_________________________________________

// console.log(1 + '2')// 12
// console.log(1 * '2') //2
// console.log(1 * '2a') //NaN
// console.log({} + {
//     toString() {
//         return '{}'
//     }
// }) //[object Object]{}
// console.log({})// {}
// console.log({} + {})// [object Object][object Object]
// console.log({}.toString()) // [object Object]
// console.log({}.valueOf()) // {}
// console.log([1,2] + [1,2,3])// 1,21,2,3
// console.log([1,2] - [1,2,3])// NaN
//
// const a = {
//     name: 'a'
// }
// const b = {
//     name: 'b',
//     hi() {
//         (() => {
//             console.log(this.name)
//         }).call(a)
//     }
// }
//
// const c = {
//     name: 'c'
// }
//
// b.hi.call(c)
//
// const group = {
//     name: 'Samurai',
//     users: ['Alex', 'Hanna'],
//     showUsersWithGroup() {
//         debugger
//         this.users.forEach(function (user) {
//             debugger
//             console.log(`${this.name}: ${user}`)
//         })
//     }
// }
// group.showUsersWithGroup()

// const user = {
//     sleep() {
//         this.isSleeping = true
//     }
// }
//
// const john = {}
// console.dir(user)
//
// john.__proto__ = user
// console.dir(john)
// // john.sleep()
// // console.log(john.isSleeping)

// Array.prototype.newFlat = function () {
//     return this.reduce((acc, el) => Array.isArray(el) ? [...acc, ...el.newFlat()] : [...acc, el], [])
// }
//
// console.log([1, 2, 3, [4, 5, [6, 7, [8, 9]]]].newFlat())
//
// Function.prototype.newBind = function (context, ...arg1) {
//     const param = this
//     return function (...arg2) {
//         return param.call(context, ...arg1, ...arg2)
//     }
// }
//
// let obj1 = {
//     name: 'Artem',
//     sayName: function () {
//         console.log("Hello" + ' ' + this.name)
//     }
// }
//
// let obj2 = {
//     name: 'Andrey'
// }
//
// console.log(obj1.sayName.newBind(obj2)())
// 'use strict'
// const foo = () => {
//     bar()
//     {
//         function bar() {
//
//         }
//     }
//     console.log(bar)
// }
// foo()
// function hello () {
//
// }
// console.dir(hello)
// console.log(hello.prototype === Object.prototype)
// let man = {firstNmae: 'adawdwad'}
// console.log(man.toString())

// let promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(4)
//     }, 2000)
// }).then((res) => {
//     console.log(res)
//     return 6
// }).then((res) => {
//     console.log(res)
// })
//
//
// const foo = () => {
//     let count = 0
//     return () => {
//         count++
//         return count
//     }
// }
//
// const foo1 = foo()
// const foo2 = foo()
//
// console.log(foo1())
// console.log(foo1())
// console.log(foo1())
//
// console.log(foo2())
// console.log(foo2())
// console.log(foo2())
//
// const obj = {
//     count: 5,
//     increment() {
//         console.log(this.count += 1)
//         return this.count
//     }
//
// }
//
// // console.log(obj.increment())
// const foo = obj.increment.bind(obj)
//
// console.log(foo())

// function Car(name) {
//     this.name = name
// }
//
// const volvo = new Car('Volvo')
//
// const benz = Car('benz')
// console.log(window.name)
// const obj = {
//     count: 5,
//     increment() {
//         return this.count
//     }
// }
//
// console.dir(obj)
// const obj2 = {
//     count: 4
// }
//
// // obj2.__proto__ = obj
// console.log(obj2.increment())


// class Foo {
//   static city = 'Minsk'
//
//
// }
//
// class Foo1 extends Foo {
//
//     getName() {
//         return this.name
//     }
// }

// const obj = new Foo('artem', 29)
// console.log(obj)

// const Foo = {
//
// }
//
// const Foo1 = {
//
// }
//
// Object.setPrototypeOf(Foo1, Foo)
//
// Foo.name = 'Alex'
//
// console.log(Foo)
// console.log(Foo1)
// class BaseUser {
//
// }
// class User extends BaseUser{
//
// }
//
// console.log(User.__proto__)

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res()
//     }, 2000)
// }).then(() => {
//     console.log(1)
//     return 3
// }).then((res) => {
//     return 1
// }).then(res => {
//     console.log(res)
// })

// function add () {
//     let value = 1
//     return () => {
//       return ++value
//     }
// }
//
// const res1 = add()
// const res2 = add()
// console.log(res1())
// console.log(res2())


//
// obj.hello()
//
// function Constructor (name, age, city) {
//     this.name = name
//     this.age = age
//     this.city = city
// }
//
// const const1 = new Constructor('Artem', 22, 'Lida')
//
// console.log(const1)
//
// console.log(Constructor.__proto__ === Function.prototype)

// const obj = {
//     name: 'Artem',
//     hello: () => {
//        return  'hello guys'
//     }
// }
//
// console.dir(obj)

//
// const obj1 = {
//     name: 'Lena',
// }
//
// Object.setPrototypeOf(obj1, obj)
//
// console.log(obj1.hello())

// class A {
//    static name = 'Alex'
// }
//
// class B extends A {
//
//     getName() {
//         console.log(1)
//     }
//
// }

// function Af () {
//
// }
//
// function Bf () {
//
// }
//
// Af.age = 23
//
// Bf.prototype.__proto__ = Af.prototype
// Bf.prototype.getName = function () {
//     console.log(1)
// }
//
// console.dir(Bf)
// console.dir(Af)

// foo()
//
// function foo () {
//     console.log(1)
// }

//
// Array.prototype.myMap = function () {
//     console.log(1)
// }
//
// const arr = [1,2,3]
//
// console.log(arr.myMap())
//
// console.log(null == undefined) // true
// console.log(null === undefined) // false
// console.log(null == null) // true
// console.log(null === null) // true
// console.log(undefined == undefined) //true
// console.log(undefined === undefined)//true
// console.log('undefined' == undefined)// false
//
// const foo = () => {
//     console.log(bar)
//
//     {
//         function bar() {
//             return  1
//         }
//     }
//
//     console.log(bar)
// }
//
// foo()
//
// for ( var i = 0; i < 10; i++) {
//     let j = i
//     setTimeout(() => {
//         console.log(j)
//     })
// }
// String.prototype.add = function (str) {
//     return this + str
// }
// const arr = [1,2,3]
//
const res = arr.join('a').replaceAll('a', '0,').add('0').split(',').map(n => +n).reduce((acc, n) => {
    acc[n] = n
    return acc
},{})
console.log(res)

// 10,20,30

// function num (nu1, num2) {
//     return Array.from(arguments)
// }
//
// console.log(num('Aptev', 'adawdwa'))


const awdwa = () => {

}
console.dir(awdwa)