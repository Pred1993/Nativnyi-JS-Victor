//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
const repeatString = (str, num, r) => {
    const arr = []
    for (let i = 0; i < num; i++) {
        arr.push(str)
    }
    return arr.join(r)
}
console.log(repeatString('yo', 3, "/"))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
const checkStart = (string, partString) => {
    const newS = string.toLowerCase().slice(0, partString.length)
    return newS === partString
}
console.log(checkStart("Incubator", "inc"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const truncateString = (string, num) => {
    const partString = string.slice(0, num)
    return `${partString}...`
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
const getMinLengthWord = (string) => string
    ? string.split(' ').reduce((acc, el) => acc.length < el.length ? acc : el)
    : null
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase = (string) => {
    const low = string.toLowerCase().split(' ')
    const arr = []
    for (let i = 0; i < low.length; i++) {
        arr.push(`${low[i].toUpperCase().slice(0, 1)}${low[i].slice(1)}`)
    }
    return arr.join(' ')
}

console.log([false, false, false].filter(f => f === true).join());
console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ!'))
//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// every()
const isIncludes = (string, partString) => {
    const stringLow = string.toLowerCase().split('')
    const partStringLow = partString.toLowerCase().split('')
    const znac = partStringLow.every(el => {
        for (let i = 0; i < string.length; i++) {
            if (el === stringLow[i]) {
                return true
            }
        }
    })
    return znac
}
console.log(isIncludes("Incubator", "t"))

const isEvenIndexSumGreater = (arr) => {
    //...здесь пишем код.
    let sumChet = 0
    for (let i = 0; i <arr.length ; i + 2) {
        sumChet = sumChet + arr[i]
    }
    console.log(sumChet)
    let sumNechet = 0
    for (let j = 1; j < arr.length; j + 2) {
        sumNechet = sumNechet + arr[j]
    }
    console.log(sumNechet)
    // В return стоит "заглушка", чтоб typescript не ругался
    return sumChet > sumNechet
}
console.log(isEvenIndexSumGreater([1, 100, 2, 200]))