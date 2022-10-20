// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(4)
//     },1000)
// }).then((res) => {
//     return res
// }).then((res) => {
//     console.log(res)
// })
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
//         this.nameLength = value
//     }
//
//     get nameLength() {
//         return this._nameLength
//     }
//
//     set nameLength(value) {
//         this._nameLength = value
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

const user = {
    sleep() {
        this.isSleeping = true
    }
}

const john = {}
console.dir(user)

john.__proto__ = user
console.dir(john)
// john.sleep()
// console.log(john.isSleeping)