const todoList = [
    {
        id: 1,
        title: 'What to learn',
        filter: 'all',
        tasks: [
            {id: 12, title: "JS", isDone: false},
            {id: 13, title: "TS", isDone: false},
            {id: 14, title: "HTML", isDone: false}
        ]
    },
    {
        id: 2,
        title: 'What to buy',
        filter: 'all',
        tasks: [
            {id: 22, title: "Milk", isDone: false},
            {id: 23, title: "Cheese", isDone: false},
            {id: 24, title: "Ice-cream", isDone: false}

        ]
    }
]

const tasks = {
    [todoList[0].id]: [
        {id: 12, title: "JS", isDone: false},
        {id: 13, title: "TS", isDone: false},
        {id: 14, title: "HTML", isDone: false}
    ],
    [todoList[1].id]: [
        {id: 22, title: "Milk", isDone: false},
        {id: 23, title: "Cheese", isDone: false},
        {id: 24, title: "Ice-cream", isDone: false}
    ]
}

//reduce
// суммирование
const nums = [10, 30, 20]
console.log(nums.reduce((acc, el) => {
    acc = acc + el
    return acc
}, 0))
// запись в одну строку
console.log(nums.reduce((acc, el) => acc + el, 0))
// нахождение максимального значения
console.log(nums.reduce((acc, el) => {
    if (acc > el) {
        return acc
    } else {
        return el
    }

}))
// запись в одну строку
console.log(nums.reduce((acc, el) => acc > el ? acc : el))


let students = [
    {
        id: 1,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    },
    {
        id: 2,
        name: "Artem",
        age: 33,
        isMarried: true,
        scores: 150
    },
    {
        id: 3,
        name: "Alex",
        age: 13,
        isMarried: false,
        scores: 90
    },
    {
        id: 4,
        name: "Nastya",
        age: 58,
        isMarried: true,
        scores: 70
    },
    {
        id: 4,
        name: "Ektor",
        age: 20,
        isMarried: false,
        scores: 110
    }
]

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

console.log(students.reduce((acc, el) => acc + el.scores
    , 0))
// Метод Map
console.log(students.map(st => ({...st, scores: st.scores + 10})))

// Метод Mар методом reduce
console.log(students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 10})
    return acc
}, []))

// Создание ассоциотивного массива методом reduce

console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))