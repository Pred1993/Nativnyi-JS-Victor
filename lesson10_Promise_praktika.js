// let promise = new Promise((resolve) => {
//     resolve(5)
//     console.log(1)
//     console.log(2)
//     console.log(3)
// })
//
// promise.then((res) => {
//     console.log(res + 'number')
// })
//
// promise.then((res) => {
//     console.log(res + 1 + 'number')
// })
// console.log('finally')

//
// function doAfter(num) {
//     let promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, num)
//     })
//     return promise
// }
//
// let promise3 = doAfter(5000);
// setTimeout(() => {
//     promise3.then(() => console.log('я сработал через 3 секунд'));
// }, 4)



// doAfter(1000).then(() => {
//     console.log('я сработал через секунду')
// })
//
// doAfter(2000).then(() => {
//     console.log('я сработал через 2 секунды')
// })
//
// doAfter(3000).then(() => {
//     console.log('я сработал через 3 секунды')
//})

//     let promise = new Promise((resolve) => {
//         let i =0
//         setInterval(() => {
//             ++i
//             resolve(i)
//         }, 3000)
//     })
// promise.then((res) => {
//     console.log(res)
//

async function yo() {
    return 5
}

const a = yo()

console.log(a)

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = {name: 'Artem', age: 24}
        resolve(data) // PromiseState: "fulfilled", PromiseResult: data
        reject(new Error('Some Error')) // PromiseState: "rejected", PromiseResult: Error: Some Error at http://localhost:63342/JS-lesson/lesson10_Promise.js:28:12
    }, 1000)
})

promise.then((data) => {
    console.log(data)
})
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {

    })

console.log(promise)