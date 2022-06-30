// const arr = [1, 2, 3, 4, 5]
// const copyUser = user
// // {} - нет !!!!
// // new Object()
// //Object.assign({}, user)
// // [] -
// // new Array()
//
// user.name = "Anne"
//
// const realCopyUser = {...user} // #5666
// const realCopyUser = [...arr]
// // realCopyUser.name = user.name
// // realCopyUser.age = user.age
// // realCopyUser.isMarried = user.isMarried
// console.log(realCopyUser)
// console.log(realCopyUser === user)// false
// console.log(copyUser === user)// false
// realCopyUser.name = 'Bob'
// console.log(user.name)
const user = { // #4567
    name: "Bob",
    age: 26,
    isMarried: true,
    friend: ["Alex", "Bob", "John"],
    address: {
        city: "Boborujsk",
        street: "Lenina"
    }
}
const copyUser = {...user}
// copyUser.friend.push("Anne")
// console.log(user)
// console.log(user === copyUser)
// console.log(user.friend === copyUser.friend)

console.log(user.friend === copyUser.friend)
const deepCopy = {
    ...user,
    friend: [...user.friend],
    address: {...user.address}
}
console.log(user.friend === deepCopy.friend)
console.log(copyUser.address === deepCopy.address)
console.log(deepCopy)
const student = [
    {name: 'Bob'},
    {name: 'Alex'},
    {name: 'Ann'}
]
const copyStudent = [...student]
console.log(copyStudent)

// const deepCopyStudent = []
// for (let i = 0; i < student.length; i++) {
//     deepCopyStudent[i] = {...student[i]}
// }
// const deepCopyStudent = student.map(student => ({...student}))const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];