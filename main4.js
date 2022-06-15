const todoList =[
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
    [todoList[0].id] : [
        {id: 12, title: "JS", isDone: false},
        {id: 13, title: "TS", isDone: false},
        {id: 14, title: "HTML", isDone: false}
    ],
    [todoList[1].id] :[
        {id: 22, title: "Milk", isDone: false},
        {id: 23, title: "Cheese", isDone: false},
        {id: 24, title: "Ice-cream", isDone: false}
    ]
}

//reduce
const nums = [10, 20, 30]