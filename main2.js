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
// const names = ['Bob', 'Alex', 'Nick', 'John']
const getNames = (arr) => {
    const result = []
    const func = t => t.name
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(getNames(students))

//Начислить по 10 баллов всем студентам
// const addScores = (arr) => {
//     const result = []
//     const func = t => t.scores + 10
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = func(arr[i])
//         arr[i].scores = newValue
//         result.push(arr[i])
//     }
//     return result
// }
// console.log(addScores(students))

// Второй вариант решения
const addScoresDubl = (arr) => {
    const result = []
    const func = (t) => ({...t, scores: t.scores + 10})
    for (let i = 0; i < arr.length; i++) {
        const newValues = func(arr[i])
        result.push(newValues)
    }
    return result
}
console.log(addScoresDubl(students))

// Добавить свойство isStudent: true

// const addIsStudent = (arr) => {
//     const result = []
//     const func = (t) => ({...t, isStudent: true})
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = func(arr[i])
//         result.push(newValue)
//     }
//     return result
// }
// console.log(addIsStudent(students))

// Добавить свойство isStudent: true ворой способ через передачу функции

const addIsStudent = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(addIsStudent(students, t => ({...t, isStudent: true})))

// Решение тойже задачи методом map
console.log(students.map(t => ({...t, isStudent: true})))

// Перебрать наших студентов найти у кого из них больше 100 балов и вывести в новый массив
// const filterStudent = (arr, func) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].scores >= 100) {
//             const newValue = func(arr[i])
//             result.push(newValue)
//         }
//     }
//     return result
// }
// console.log(filterStudent(students, t => ({...t})))


// Ещё один способ
const filterStudent = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        if (newValue === true) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(filterStudent(students, t => t.scores >= 100))
// Решение задачи методом фильтр
console.log(students.filter(t => t.scores >= 100))

// Метод find внутрянка

const myFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        if (newValue === true) {
            return arr[i]
        }
    }
}
console.log(myFind(students, t => t.name === 'Alex'))
console.log(students.find(t => t.name === 'Alex'))