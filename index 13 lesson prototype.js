// //Прототипы 1ая часть вводная
// const baseUserPrototype = {
//     defaultNickName: 'default'
// }
//
// const userPrototype = {
//     defaultAge: 18
// }
// Object.setPrototypeOf(userPrototype, baseUserPrototype)
//
// const alex = {
//     name: 'Alex'
// }
//
// Object.setPrototypeOf(alex, userPrototype) // теперь у объекта alex скрытое свойство [[Prototype]] ссылается на userPrototype а скрытое свойство [[Prototype]] объекта userPrototype ссылается на baseUserPrototype. Дословно говорим сделай прототипом объекта alex объект userPrototype а прототипом userPrototype сделай baseUserPrototype
// // И так по ссылкам объект может искать своё свойство пока не закончатся прототипы, пока не будет [[Prototype]] : null и вернет в таком случае undefined
//
//
// console.log(alex.defaultNickName) // вернет default
// console.log(alex.secondName) // вернет undefined
//
// // Нельзя зацикливать поиск свойств в прототипах ссылкой на изначальный объект к примеру, циклической зависимости здесь не бывает, выдаст ошибку
// // У объекта может быть только одно свойство [[Prototype]] которое ссылается на какой-то объект, в своё время у объекта на который ссылаемся есть тоже одно свойство [[Prototype]], которое ссылается тоже а какой-то объект либо на null
//
// //Прототипы 2ая часть Функции-конструкторы
//
// function User(){
//
// }
// User.prototype // => {constructor: User}
// new User()
// console.dir(User)
// // Таким образом у всех крнструкторов есть свойство prototype значение которого объект со свойством constructor и ссылкой на создающий конструктор. Как подтверждение ниже
// console.log(User.prototype.constructor === User) // true
//
// function User(name) { // функция-конструктор
//     this.name = name
// }
//
// const alexia = new User('Alex') // {name: Alex} -> Object.setPrototypeOf(alex, User.prototype)
//     //Тоесть функция-констуктор не только создаёт инстанс под капотом но и создаёт [[Prototype]] который ссылается на объект {constructor: User} а этот объект как видим ссылается на сам конструктор
// console.log(alexia)
//
// //Определение: Prototype - это свойство функции констуктора которое указывает на объект и к этому объекту инстансы функции-конструктора могут ссылаться по скрытому свойству [[Prototype]]
//
// console.log(alexia.constructor === User)
//
// const a ={} // a[[Prototype]] -> Object.prototype
// const b =[] // b[[Prototype]] -> Array.prototype -> {constructor: Array}[[Prototype]] -> Object.prototype -> null
//
// // 3. Про __proto__
//
// //const a = {}
// //const b = {}
//
// Object.setPrototypeOf(b, a)// прототипом объекта b мы сделали объекта a
//
// b.__proto__ = a // таже запись что и строчкой выше, но старый синтаксис
//
//
// function User () {
//
// }
//-------------------------------------------------------------------------------------------------
// function User(name, age) {
//     this.name = name
//     this.age = age
// }
//
// const u = new User('Alex', 23)
//
// console.dir(User)
// console.dir(u)
// console.log(User.prototype)

function Test(name) {
    this.name = name
}

Test.prototype.getName = function (){}

function SuperTest(name) {
    Test.call(this, name)
}

SuperTest.prototype = Object.create(Test.prototype, {
    constructor: {

    }
})