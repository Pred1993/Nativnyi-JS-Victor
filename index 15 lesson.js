//descriptors, iterators, objects to primitives


// ===================== OBJECTS TO PRIMITIVE ==================

//1. hint -> "string" | "number" <==> "default"
//2. if Symbol.toPrimitive -> Symbol.toPrimitive(hint) else -> 3, 4
//3 if hint === "string" -> toString() -> valueOf()
//4 if hint === ("number" | "default") -> valueOf() -> toString()


// const user = {
//     name: 'Alex',
//     age: 23,
//     [Symbol.toPrimitive]: function (hint) {
//         if (hint === "string") {
//             return this.name
//         }
//
//         if (hint === "number") {
//             return user.age
//         }
//
//         if (hint === "default") {
//             return user.age
//         }
//     }
// }
//
//
// const rect = {
//     x: 4,
//     y: 5,
//     [Symbol.toPrimitive]: function (hint) {
//         console.log("HINT", hint)
//         if (hint === "number") {
//             return this.x * this.y
//         }
//
//         return "[object Object]"
//     }
// }
//
// const rect2 = {
//     x: 4,
//     y: 6,
//     [Symbol.toPrimitive]: function (hint) {
//         console.log("HINT", hint)
//         if (hint === "number") {
//             return this.x * this.y
//         }
//
//         return "[object Object]"
//     }
// }
//
// console.log(String(rect2))


// const a = {}
// const b = {}
//
// a[b] = 10
//
// console.log(a)


//===================================== ITERATORS ===============================

// const nums = [1, 2, 3]

// const iterator = nums[Symbol.iterator]()
//
// while(true) {
//     const current = iterator.next()
//
//     if(current.done) break
//
//     console.log(current.value)
// }

// for(let c of "hello") {
//     console.log(c)
// }


// const range = {
//     from: 0,
//     to: 5,
//
//     [Symbol.iterator]: function () {
//
//         let count = 0
//
//         return {
//             next() {
//                 return {
//                     done: false,
//                     value: count++
//                 }
//
//             }
//         }
//     }
// }


//Object.create
//Object.defineProperty
//Object.defineProperties
//Object.getOwnPropertyDescriptor
//Object.getOwnPropertyDescriptors
//Object.preventExtensions


// ================================ DESCRIPTORS ===============================
// const user = {
//     name: "Alex", // -> settings -> descriptors -> { value: 'Alex', writable: true, enumerable: true, configurable: true }
// }

// console.log(
//     Object.getOwnPropertyDescriptor(user, "name")
// )
//
// console.log(
//     Object.getOwnPropertyDescriptors(user)
// )


// const user1 = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })
//
//
// const user2 = {};
//
// Object.defineProperty(user2, "name", {
//     value: 'Alex',
//     writable: true,
//     enumerable: true,
//     configurable: true
// })


// const user3 = {};
//
// Object.defineProperties(user2, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })




// ================================== WRITABLE ===================

//'use strict'; //-> try
// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: false,
//         enumerable: true,
//         configurable: true
//     }
// })
//
// user.name = "Hanna"
//
// console.log(user)


// ================================== ENUMERABLE ===================

// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: false,
//         configurable: true
//     }
// })
//
// console.log(user)
//
// console.log(
//     Object.keys(user)
// )
//
// for(let k in user) {
//     console.log(k)
// }



// ================================== CONFIGURABLE ===================

// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })
//
//
// console.log(
//     Object.getOwnPropertyDescriptors(user)
// )


//1. Can not delete prop

// delete user.name
//
// console.log(user)


//2. Can not change enumerable configurable
// Object.defineProperty(user, "name", {
//     value: 'Alex',
//     writable: true,
//     enumerable: true,
//     configurable: false
// })


//3. Can not change writable false -> true
// Object.defineProperty(user, "name", {
//     value: 'Alex',
//     writable: false,
//     enumerable: true,
//     configurable: false
// })


// ==================== Object.preventExtensions ================
// //'use strict';
// const object1 = {};
//
// Object.preventExtensions(object1);
//
// try {
//     object1.name = 'Test'
//     console.log(object1)
// } catch (e) {
//     console.log(e);
//     // expected output: TypeError: Cannot define property property1, object is not extensible
// }


// ==================== Object.seal ================


// const obj = {
//     name: 'Alex'
// };
//
// console.log(
//     Object.getOwnPropertyDescriptors(obj)
// )
//
// Object.seal(obj);
//
// console.log(
//     Object.getOwnPropertyDescriptors(obj)
// )

// ==================== Object.freeze ================


// const obj = {
//     name: 'Alex'
// };
//
// console.log(
//     Object.getOwnPropertyDescriptors(obj)
// )
//
// Object.freeze(obj);
//
//
// console.log(
//     Object.getOwnPropertyDescriptors(obj)
// )









