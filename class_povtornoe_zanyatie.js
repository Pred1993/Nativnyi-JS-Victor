//Нельзя вызвать без new [[isClassConstructor]]
//Строковое представление
//Внутри класса use strict;
//Методы класса -> неперечисляемые

// class Car {
//
//     engine = "V8"
//
//     constructor(model) {
//        this.model = model
//     }
//
//     run() {
//         console.log(`The ${this.model} run!`)
//     }
// }
//
// const opel = new Car('Astra')
//
// opel.run()


// ======================== static =====================
// class Car {
//     static defaultEngine = "V6"
//
//     static someMethod() {
//
//     }
// }
//
// console.log(
//     Car.defaultEngine
// )
//
// Car.someMethod()


// class User {
//     static nameLength = 20
//
//     static validateUserName(name) {
//         return name.trim() > this.nameLength
//     }
//
//     constructor(name) {
//        if(User.validateUserName(name)) {
//            this.name = name
//        } else {
//            throw new Error('Invalid name')
//        }
//     }
// }


// class User {
//     static nameLength = 20
//
//     static validateUserName(name) {
//     }
//
//     someMethod() {
//         //Bad code!!!!
//         this.validateUserName()
//     }
// }


//========================= private fields + get/set =================

// class User {
//     #nameLength = 20
//
//     get nameLength() {
//         return this.#nameLength
//     }
//
//     set nameLength(value) {
//         this.#nameLength = value
//     }
// }
//
// const alex = new User()
//
// alex.nameLength = "New Name"
//
// console.log(
//     alex.nameLength
// )


// ==================  Наследование ===================

// class BaseLogger {
//     log() {}
// }
//
// class InfoLogger extends BaseLogger {
//     info() {}
// }
//
// class InfoErrorLogger extends BaseLogger {
//     error() {}
// }













































