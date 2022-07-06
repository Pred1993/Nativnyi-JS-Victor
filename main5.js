// Метод sort
const names = ['Artur', 'Bob', 'Vlad', 'Alex', 'Donald', '007', 'alex', 'Юрий']
console.log(names.sort())

const numbers = [100, 99, 665, 1000, 2]
console.log(numbers.sort())
// return > 0 => перестановка
// return < 0 => перестановки не будет

const compFn = (a, b) => {
    if (a > b) {
        return 10 // ретурним положительное число
    } else {
        return -10 // ретурним отрицательное число
    }

};
// Метод сорт является ммутабельным, тоесть изменяет исходный массив с одинаковой ссылкой, поэтому, чтобы сохранить старый массив используем спред оператор
const newNumbers = [...numbers].sort(compFn)
console.log(numbers)
console.log(newNumbers)

// решение в одну строку
console.log(numbers.sort((a, b) => a - b))
console.log(numbers.sort((a, b) => b - a))

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
        id: 5,
        name: "alex",
        age: 20,
        isMarried: false,
        scores: 110
    }
]

console.log(students.sort((a, b) => a.age - b.age).reverse())
// сравнение строк используя готовый метод localeCompare
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
// сравнение строк
console.log(students.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

// Сортировка пузырьком bubble sort
let nums = [13, 11, 67, 12, 99, 87]


for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break

}

console.log(nums)