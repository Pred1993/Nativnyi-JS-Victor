// // функция-конструктор
// function DeleteUser1(userId) {
//     this.type = 'DELETE-USER'
//     this.payload = {
//         userId: userId
//     }
// }
//
// const action1  = new DeleteUser1(1)
// const action2  = new DeleteUser1(2)
// console.log(action1)
// console.log(action2)
// Теперь про классы: класс - это грубо говоря инструкция, которая позволяет создавать однотипные объекты

class User {
    _name = '' // приватное свойство к которому нельзя обратиться напрямую? а только внутри методов объектов
    constructor(name, site, dob) {
        this._name = name
        this.site = site
        this.dateOfBirth = dob
    }

    get name() {
        return this._name
    }

    set name(name) {
        return this._name = name
    }

    getName() {
        return this._name
    }

    setName(name) {
        return this._name = name
    }

    hello() {
        console.log(`I am ${this._name} from ${this.site}`)
    }
}

const u1 = new User('Dimych', 'it-incubator.by', new Date(1998, 1, 2))
const u2 = new User('Artem', 'it-incubator.by', new Date(1998, 10, 12))

console.log(u1.hello())
console.log(u2.hello())
//console.log(u1.#name) // Private field '#name' must be declared in an enclosing
console.log(u1.name)// так вызывается гетер и мы получим в консоли 'Dimych'
console.log(u1.name = 'Artem')// так вызывается cетер и мы получим в консоли 'Artem'
console.log(u1.getName())// так вызывается обычный метод и мы получим в консоли 'Dimych'
console.log(u1.setName('Igor'))// так вызывается обычный метод и мы получим в консоли 'Igor'

// Наследование
// class Coder extends User {
//     code() {
//         console.log(`I am ${this.name}, here is my cod: .....`)
//     }
// }
//
// const coder1 = new Coder('Dimych', 'it-incubator.by', new Date(1998,1,2))
// coder1.hello() //I am Dimych from it-incubator.by
// coder1.code() //I am Dimych, here is my cod: .....
// Таким образом мы расширили класс Coder за счёт свойств наследника User
// Если же мы хотим расширить свойства Coder, также на базе User то:
class Coder extends User {
    constructor(name, site, dob, tech) {
        super(name, site, dob);// так мы обращаемся к свойствам User
        this.tech = tech // расширяем свойством новым
    }

    code() {
        console.log(`I am ${this._name}, here is my ${this.tech} cod: .....`)
    }

    hello() {
        super.hello()
        console.log(`Go away ${this._name}`)// мы насытили наследуемый метод hello() дополнительной строкой кода в наследуемом классе Coder
    }
}

const coder1 = new Coder('Dimych', 'it-incubator.by', new Date(1998, 1, 2), 'js')
coder1.code()

class Haker extends Coder {
    constructor(name, site, dob, tech) {
        super();
        this._name = 'XXXX'
        this.tech = 'adawdaw'
    }

    code() {
        console.log('I will hack everything')
    }
}

const haker = new Haker('Dimych', 'it-incubator.by', new Date(1998, 1, 2), 'js')
haker.hello()
haker.code()

// Полиморфизм

let user = [u1, u2, coder1, haker]
user.forEach(u => u.hello())

class Samurai {
    constructor(name) {
        this.name = name
    }
    hello(){
        alert(this.name)
    }
}

let shogun = new Samurai('Dimych')
console.log()
