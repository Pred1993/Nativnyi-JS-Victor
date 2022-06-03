const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
// const names = ["Bob", "Alex", "Nick", "John"]
const getNames = (arr) => {
    const result = []
    const func = st => st.name
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)

    }
    return result
}
console.log(getNames(students))

const addScores = (arr) => {
    const result = []
    const func = (st) => ({...st, scores: st.scores + 10})
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(addScores(students))

const getMappedArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(getMappedArray(students, st => st.name))
console.log(getMappedArray(students, (st) => ({...st, scores: st.scores + 10})))

console.log(students.map((st) => st.name))


// Пишим свой собственный метод фильтр
const myFilter = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i]) // => true / false
        if (newValue === true) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(myFilter(students, st => st.scores > 100))
// console.log(student.filter(st => st.scores > 100))
//Метод find

const myFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i]) // => true / false
        if (newValue === true) {
            return arr[i]
        }
    }
}

console.log((students.find(st => st.name === 'Alex')))
console.log(myFind(students, st => st.name === 'Alex'))