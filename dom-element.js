// const bodyElement = document.body
// const childNodes = bodyElement.childNodes
// console.log(childNodes)
// console.log(bodyElement.firstElementChild)
//
//
// console.log(Array.from(childNodes))
//
// console.log(bodyElement.parentNode)

// for (let node of childNodes ) {
//     console.log(node)
// }

// const bodyChildren = bodyElement.children
// console.log(bodyChildren)
//
//
// const pTeg = document.querySelectorAll('p')
// console.log(pTeg)
//
//
// for (let item of pTeg ) {
//     console.log(item)
// }

const forOf = document.querySelector('.forOf')

const newElement = document.createElement('div')


newElement.textContent = 'Привет Мир!'
console.log(newElement)

const newText = document.createTextNode('И тебе привет!')

console.log(newText)

forOf.before(newElement)
forOf.after(newElement)

const p1 = document.querySelector('.p1')
console.log(p1)

const copyP1 = p1.cloneNode(true)

const p5 = document.querySelector('.p5')
console.log(p5)

p1.before(copyP1)

