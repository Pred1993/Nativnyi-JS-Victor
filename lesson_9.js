// замыкание и рекурсия

const le = {
    enviromentsRecords: {

    },
    outer: null
}

// script, function, {}, (if else, while, for, {}) - формирует лексическое окружение

// Просто объект не формирует лексического окружения
//Пример:
// const a = {
//     name: 'Alex'
// }

//Пример создание лексического окружения #1
// {empty} -> null
let name  //{name: undefined} -> null

name = 'Alex' //{name: 'Alex'} -> null


name = 'Hanna'//{name: 'Hanna'} -> null

//Про функции

hi()

function hi() { // Function Declaration - можно вызвать в любом участке кода
    console.log('Hi')
}

const hi1 = function () { // Function Expression - можно вызвать только после объявления
    console.log('Hi1')
}

hi1()

//Пример создание лексического окружения #2
// - globalLE
// { hi:[Function] } -> null
const name = 'Alex' //{ hi:[Function], name: 'Alex } -> null

function hi() {
    let age = 23 // hiLE => { age: 23 } -> globalLE

    const hi2 = () => { // { age: 23, hi2: [Function]} -> globalLE
        // hi2LE => {empty} -> hiLE
        console.log(name)
    }
    hi2()
    console.log(name)
    console.log(age)
}

hi() // каждый вызов функции формирует новый объект лексического окружения
// Замыкание - это способность функции запоминать в каком лексическом окружении она была создана!
//{hi: Function} -> null
const name = 'Alex' // {hi: Function, name: 'Alex'} -> null

function hi() {
   //[[Environment]] -> globalLE , функциия в момент вызова уже знает в каком лексическом окружении ее создали

}
hi()
//Пример создание лексического окружения #3

function makeCounter() {
    //[[Environment]] -> globalLE
    // {} -> globalLE
    let counter = 0 // {counter: 0} -> globalLE

    return () => {
        //[[Environment]] -> makeCounterLE
        console.log(counter++)
    }
}

let counter = makeCounter() // {makeCounter: [Function], counter: [Function] }
counter()
counter()
counter()




