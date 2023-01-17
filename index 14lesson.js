// class User {
//
//    nickName = 'default'
//
//    constructor(name, age) {
//       this.name = name
//       this.age = age
//    }
//
//    showName() {
//       console.log(this.name)
//    }
// }
//
//
// const alex = new User("Alex")


//1 can not call class without new [[isClassConstructor]]
//2 inside class -> 'use strict';
//3 string representation


// ============== STATIC METHODS AND PROPS =======================

// class User {
//
//    static defaultNameLength = 30 // статический метод опрделяется только в классе, инстансы классы статических методов и свойств не видят
//
//    static validateName(name) {
//       if(name.length > this.defaultNameLength) {
//          throw new Error('Invalid name')
//       }
//    }
// }
//
//
// const user = new User()
//
// User.defaultNameLength
//
// User.validateName("")
//
// user.validateName()


// ==================== GET SET =================

// class User {
//    #name = 'default'
//
//    get name() {
//       return this.#name
//    }
//
//    set name(value) {
//       this.#name = value
//    }
// }


// =================== extends =================


class BaseUser {
    static defaultNameLength = 30

    constructor(name) {
        this.name = name
    }

    showName() {
        console.log(this.name)
    }

}

class User extends BaseUser {
    constructor(name) {
        super(name);
    }

    // showName() {
    //   super.showName()
    // }
}

console.log(User.defaultNameLength)

// class Admin extends BaseUser {
//    constructor(name) {
//       super(name);
//    }
//
//    showName() {
//       super.showName()
//    }
// }
//
// function showName(cl) {
//    cl.showName()
// }
//
//
// showName(new BaseUser())
// showName(new User())
// showName(new Admin())


//
//
// const alex = new User("Alex", 23)
//
// alex.showName()
const num = 1
console.dir(num.toString())



















