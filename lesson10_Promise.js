// В самом промисе нет ничего асинхронного, асинхронны лишь запросы в теле промиса, которые мы выполняем
// функции иммитирующая запрос с сервера якобы
const findUserInDB = (id) => {
    const users = [
        {id: 1, name: 'Dimych', friend: 3},
        {id: 2, name: 'Sveta', friend: null},
        {id: 3, name: 'Valera', friend: 2}
    ]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find(u => u.id === id)
            if (user === undefined) {
                reject('user not found')
            } else {
                resolve(user)
            }
        }, randomInFromInterval(500, 1500))
    })
}

function randomInFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// const promise1 = findUserInDB(99)
// promise1
//     .then((data) => {console.log(data)})
//     .catch((data) => {console.log(data)})
//     .finally(() => {console.log('finish')
// })
// Создание промиса с помощью класса промис

new Promise((resolve, reject) => {
    resolve(5)
}).then((data) => {
    console.log(data)
})
// Метод промиса allSettled возвращает другой промис, который зарезолвится когда все промисы уйдут из состояния pending
const promise1 = findUserInDB(2)
promise1
    .catch((data) => {
        console.log(data)
    })

const promise2 = findUserInDB(1)
promise2
    .then((data) =>
        console.log(data)
    )
console.log(promise2)
Promise.allSettled([promise1, promise2]).then((result) => {
    if (result[0].status === 'fulfilled') {
        console.log(result[0].value)
    }
})

Promise.all([promise1, promise2]).then((result) => {
    console.log(result)
})

//// Метод промиса resolve возвращает другой промис, который сразу зарезолвленый, тоже самое с методом reject? который сразу зареджекнутый
const resolvePromise = Promise.resolve({name: "Atrem"})
console.log(resolvePromise)

// Async / Await
async function run() {// запись async обозначает что функция выполняет асинхронный код
    let user = await findUserInDB(1) // запись await обозначает что пока промис выполняется программа выходит из функции run и делает что-то, если есть что делать, но в самой функции run пока не выполниться первый await программа дальше по коду не пойдет
    console.log(user)
    let friend1 = await findUserInDB(user.friend)
    console.log(friend1)
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2.name)
}
const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
async function f() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}
f()
// Занятия с Лёшей
// Promise - это объект в котором есть состояние(PromiseState): pending, fulfilled, rejected, и он может хранить какой-то результат(PromiseResult), а также есть методы: then(), catch(), finally()
// const promise = new Promise((resolve, reject) => { // // создан Promise с помощью конструктора, через конструктор создаётся для более обширной логики внутри промиса, в отличие от фабричной функции
//     setTimeout(() => {
//         let data = {name: 'Artem', age: 24}
//         resolve(data) // PromiseState: "fulfilled", PromiseResult: data
//         reject(new Error('Some Error')) // PromiseState: "rejected", PromiseResult: Error: Some Error at http://localhost:63342/JS-lesson/lesson10_Promise.js:28:12
//     }, 1000)
// })
// promise.then((data) => {
//     console.log(data)
// })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//
//     })
//
// console.log(promise)

// Пример цепочки Promise

// promise
//     .then((res) => {
//         console.log(res)
//         return "From first then"// создается новый Promise статической функцией (Promise.resolve("From first then"))
//     })
//     .then((res) => {
//         console.log(res) // "From first then"
//         return "From second then"
//     })
//     .then((res) => {
//         console.log(res)// "From second then"
//     })

// Поиграемся с запросами на сервер fetch

// const getTodo = () => {
//     const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     promise
//         .then((data) => {
//             return Promise.resolve(data.json()) // статическая функция
//             // второй вариант return data.json()
//         })
//         .then((data) => {
//             console.log(data)
//         })
// }
//
// getTodo()

// метод promise all дожидается пока все промисы в массиве будут зарезолвлены и then попадут результаты по очереди, all это статический метод

// Promise.all([
//     Promise.resolve('Hello'),
//     Promise.resolve("World"),
//     new Promise(resolve => {
//         setTimeout(() => {
//             resolve('!!!')
//         }, 1000)
//     })])
//     .then((res) => {
//         console.log(res) // ['Hello', 'World', '!!!']
//     })
// // метод promise race - отработает самы быстрый
// Promise.race([
//     new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Hello')
//         }, 2000)
//     }),
//     new Promise(resolve => {
//         setTimeout(() => {
//             resolve("World")
//         }, 3000)
//     }),
//     new Promise(resolve => {
//         setTimeout(() => {
//             resolve('!!!')
//         }, 1000)
//     })])
//     .then((res) => {
//         console.log(res) // '!!!'
//     })