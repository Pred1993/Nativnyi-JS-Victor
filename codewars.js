// Первая задачка

// var isSquare = function (n) {
//     if (n < 0) {
//         return false
//     }
//     if (Number.isInteger(Math.sqrt(n))) {
//         return true
//     } else return false
// }
// console.log(isSquare(-1))
// console.log(isSquare(0))
// console.log(isSquare(3))
// console.log(isSquare(4))
// console.log(isSquare(25))
// console.log(isSquare(26))

//2. Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.
// Массив может содержать числа или строки. Х может быть любым.
// Возврат true, если массив содержит значение, false если нет.

// function check(a, x) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === x) {
//             return true
//         }
//     }
//     return false
// }
//
// console.log(check([66, 101], 66));
// console.log(check([101, 45, 75, 105, 99, 107], 107));
// console.log(check(['t', 'e', 's', 't'], 'e'));
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'));

// 3. Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их.
//     Например, если мы пропустим через функцию 9119, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1.
// Примечание . Функция принимает целое число и возвращает целое число.

// squareDigits = (num) => parseInt(String(num).split('').map(n => n * n).join(''))
// squareDigits(3212)

// 4. Ваша задача состоит в том, чтобы преобразовать строки в то, как они были бы написаны Джейденом Смитом. Строки являются настоящими цитатами Джейдена Смита, но они не написаны с заглавной буквы так, как он их изначально напечатал
// Пример:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// const toJadenCase = (string) => {
//     const newString = string.split(' ')
//     let arr = []
//     for (let i = 0; i < newString.length; i++) {
//         const srt = newString[i].toUpperCase().slice(0, 1) + newString[i].slice(1)
//         arr.push(srt)
//
//     }
//     return arr.join(' ')
// }
// console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

// 5. В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
// Примеры
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// function highAndLow(numbers){
//     let arr = []
//     const sortHighAndLow = numbers.split(' ').sort((a, b) => b - a)
//     arr.push(sortHighAndLow[0], sortHighAndLow[sortHighAndLow.length -1])
//     return arr.join(' ')
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

// 6.Тролли атакуют ваш раздел комментариев!
// Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.
// Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!».
// Примечание: для этой ката yне считается гласной.

// function disemvowel(str) {
//     const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) {
//         if(arr.indexOf(str[i]) == -1) {
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr
// }
// console.log(disemvowel("This website is for losers LOL!"))

// 7. Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.
// Примеры:
// Вход: 42145 Выход:54421
// Вход: 145263 Выход:654321
// Вход: 123456789 Выход:987654321
// function descendingOrder(n){
//    const newN = String(n).split('').sort((a,b) => b - a).join('')
//     return parseInt(newN)
// }
//
// console.log(descendingOrder(1021))

// 8.На этот раз ни истории, ни теории. В приведенных ниже примерах показано, как написать функцию accum:
// Примеры:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// function accum(s) {
//     const newAccum = s.toUpperCase()
//     let str = ''
//     for (let i = 0; i < newAccum.length; i++) {
//         let newStr = newAccum[i].toLowerCase().repeat(i + 1).slice(1)
//         str = str + newAccum[i] + newStr + '-'
//
//     }
//     return str.slice(0, str.length - 1)
// }
//
// console.log(accum("ZpglnRxqenU"))

// 9.Вам дадут слово. Ваша задача — вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, верните средние 2 символа.
// #Примеры:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// function getMiddle(s) {
//     if (s.length % 2 !== 0) {
//         const neChet = Math.ceil(s.length/2) //Code goes here!
//         return s[neChet - 1]
//     } else {
//         const chet = s.length/2
//         return s[chet - 1] + s[chet]
//     }
// }
// console.log(getMiddle("middle"))

// 10. После тяжелой четверти в офисе вы решаете немного отдохнуть в отпуске. Итак, вы забронируете рейс для себя и своей девушки и постараетесь оставить весь беспорядок позади.
// Вам понадобится арендованный автомобиль, чтобы передвигаться в отпуске. Менеджер по аренде автомобилей делает вам несколько хороших предложений.
// Каждый день аренды автомобиля стоит 40 долларов. Если вы арендуете автомобиль на 7 или более дней, вы получаете скидку в размере 50 долларов США. В качестве альтернативы, если вы арендуете автомобиль на 3 или более дней, вы получаете скидку в размере 20 долларов США.
// Напишите код, который выдает общую сумму за разные дни (d).

// function rentalCarCost(d) {
//     if (d >= 3 && d < 7){
//         return (d * 40) - 20
//     } else if (d >= 7) {
//         return (d * 40) - 50
//     } else {
//         return d * 40
//     }
// }
//
// console.log(rentalCarCost(2))
// console.log(rentalCarCost(5))
// console.log(rentalCarCost(9))

// 11. Даны два целых числа aи b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните aили b.
// Примечание: a и b не заказываются!
// Примеры (а, б) --> вывод (пояснение)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// function getSum(a, b) {
//     if (a === b) {
//         return a
//     }
//     if (a < b) {
//         let sum = 0
//         for (let i = a; i <= b; i++) {
//             sum += i
//         }
//         return sum
//     } else {
//         let sum = 0
//         for (let i = b; i <= a; i++) {
//             sum += i
//         }
//         return sum
//     }
// }
//
// console.log(getSum(0, -1))
// console.log(getSum(0, 1))
// console.log(getSum(1, 1))

//12.Банкоматы позволяют использовать 4- или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
// Если функции передана допустимая строка PIN-кода, верните true, иначе верните false.
// Примеры ( Ввод --> Вывод)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// function validatePIN(pin) {
//     if (pin.length === 4 || pin.length === 6) {
//         let newPin = pin.replace(/ /ig,'a')
//         let array = newPin.split('')
//         console.log(array)
//         return array.every(elem => isFinite(+elem))
//     } else return false
// }
//
// console.log(validatePIN('134 '))
// console.log(validatePIN("a234"))
// console.log(validatePIN("-1.234"))
// console.log(validatePIN("1111"))
// console.log(validatePIN("1111"))
// console.log(validatePIN("1111"))
// console.log(validatePIN("00000000"))
//!!!Не решена до конца

//12. Вам дан массив целых чисел нечетной длины , в котором все они одинаковы, кроме одного единственного числа.
// Завершите метод, который принимает такой массив и возвращает это единственное другое число.
// Входной массив всегда будет действительным! (нечетная длина >= 3)
// Примеры
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// function stray(numbers) {
//     let newNumbers = numbers.find((num) => {
//         let array = []
//         for (let i = 0; i < numbers.length; i++) {
//             if (num === numbers[i]) {
//                 array.push(num)
//             }
//         }
//         if (array.length === 1) {
//             return true
//         }
//     })
//     return newNumbers
// }
//
// console.log(stray([0, 0, 3, 0, 0, 0]))

// 2 способ
// function stray(numbers) {
//     numbers.sort((a, b) => a - b);
//     return numbers[0] === numbers[1]
//         ? numbers[numbers.length - 1]
//         : numbers[0];
// }

//13. В этом ката вы создадите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.
// Пример
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l) {
//     let array = []
//     for (let i = 0; i < l.length ; i++) {
//         if (Number.isInteger(l[i])) {
//             array.push(l[i])
//         }
//     }
//     return array
//     // Return a new array with the strings filtered out
// }
// console.log(filter_list([1,2,'a','b']))
// console.log(filter_list([1,'a','b',0,15]))
// console.log(filter_list([1,2,'aasf','1','123',123]))

//14.Ваша команда пишет новый модный текстовый редактор, и вам поручили внедрить нумерацию строк.
// Напишите функцию, которая принимает список строк и возвращает каждую строку с правильным номером перед ним.
// Нумерация начинается с 1. Формат n: string. Обратите внимание на двоеточие и пробел между ними.
// Примеры: (Ввод --> Вывод)
//
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
// var number= function(array){
//     return array.map((ar, index) => `${index +1}: ${ar}`)
//     //your awesome code here
// }
// console.log(number(["a", "b", "c"]))


// 15. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

// function getBanknoteList(number) {
//     const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
//     let arr = []
//     for (let i = 0; i < banknotes.length; i++) {
//         let one = Math.floor( number / banknotes[i])
//         if (one >= 1) {
//             for (let j = 1; j <= one; j++) {
//                 arr.push(banknotes[i])
//             }
//            number =  number % banknotes[i]
//         }
//     }
//     //...здесь пишем код.
//     // В return стоит "заглушка", чтоб typescript не ругался
//     return arr
// }
//
// console.log(getBanknoteList(7))

// Рекурсия дерева

// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         internals: [{name: 'Jack', salary: 1300}]
//     }
// };
//
// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//     if (Array.isArray(department)) { // случай (1)
//         return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else { // случай (2)
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//         }
//         return sum;
//     }
// }
// alert(sumSalaries(company))

//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//    Например:
//sumTo(1) = 1
//sumTo(2) = 2 + 1 = 3
//sumTo(3) = 3 + 2 + 1 = 6
//sumTo(4) = 4 + 3 + 2 + 1 = 10
//...
//sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// const sumTo = (num) => {
//     if (num === 1) {
//         return num
//     } else {
//         return num + sumTo(num - 1)
//     }
//
// }
//
// console.log(sumTo(1))
// console.log(sumTo(2))
// console.log(sumTo(3))
// console.log(sumTo(4))
// console.log(sumTo(100))

//Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
//    Определение факториала можно записать как:
//    n! = n * (n - 1) * (n - 2) * ...*1
//Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// const fac = (num) => {
//     if (num === 1) {
//         return num
//     } else {
//         return num * fac(num - 1)
//     }
// }
// console.log(fac(4))
// console.log(fac(5))

// Написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// const flatRec = (num, arr) => {
//     let arrNew = []
//     if (num === 1) {
//         return arr
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 const arrTemporary = []
//                 for (let j = 0; j < arr[i].length; j++) {
//                     arrTemporary.push(arr[i][j])
//                 }
//                 let ar2 = flatRec(num - 1, arrTemporary)
//                 arrNew = arrNew.concat(ar2)
//             } else arrNew.push(arr[i])
//         }
//     }
//     return arrNew
// }
// console.log(flatRec(4, [1, 2, 3, [4, 5, [6,7,[8,9]]]]))

// 16. Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми всеми словами из пяти или более букв (точно так же, как имя этого Ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.

//   Примеры:

//spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
//spinWords( "This is a test") => returns "This is a test"
//spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string){
//    let arr = string.split(' ')
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length >= 5) {
//            newArr.push(arr[i].split('').reverse().join(''))
//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr.join(' ')
// }
//
// console.log(spinWords("Hey fellow warriors"))
// console.log(spinWords("This is a test"))
// console.log(spinWords("This is another test"))

// 17. Ваша цель в этом ката — реализовать функцию разности, которая вычитает один список из другого и возвращает результат.
//
// Он должен удалить из списка все значения a, которые присутствуют в списке b, сохраняя их порядок.
//
// arrayDiff([1,2],[1]) == [2]
// Если значение присутствует в b, все его вхождения должны быть удалены из другого:
//
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//     if (b.length === 0) {
//         return a
//     }
//     if (a.length === 0) {
//         return a
//     }
//     for (let i = 0; i < b.length; i++) {
//         a = a.filter(el => el !== b[i])
//     }
//     return a
// }

// 2 способ
// function arrayDiff(a, b) {
//     return a.filter(e => !b.includes(e));
// }
// console.log(arrayDiff([1, 2], [1])) // [2]
// console.log(arrayDiff([1, 2, 2], [1])) // [2,2]
// console.log(arrayDiff([1, 2, 2], [2])) // [1]
// console.log(arrayDiff([1, 2, 2], [])) // [1,2,2]
// console.log(arrayDiff([], [1, 2])) // []
// console.log(arrayDiff([1, 2, 3], [1, 2])) //[3]

// 18
// Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.
// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5 , меньше переданного числа. Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).
// Примечание. Если число кратно и 3, и 5, считайте его только один раз .
// function solution(number) {
//     if (number < 0) {
//         return 0
//     }
//     let sum = 0
//     for (let i = 0; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum = sum + i
//         }
//     }
//     return sum
// }
// console.log(solution(10))

// 19. Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
// Например:
// Учитывая [34, 15, 88, 2], что ваше решение вернется 2
// Учитывая [34, -345, -1, 100], что ваше решение вернется -345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let newArray = args.sort((a,  b) => a - b)
//         return newArray[0]
//     }
// }
//
// let set = new SmallestIntegerFinder()
// console.log(set.findSmallestInt([78, 56, 232, 12, 8]))
// console.log(set.findSmallestInt([78, 56, 232, 12, 0]))
// console.log(set.findSmallestInt([-78, 56, -232, -12, 0]))

// 20.
// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
// Примеры
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//     let newArray = array.filter(ar => ar % 2 !== 0).sort((a,b) => a - b)
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             newArray.splice(i, 0, array[i])
//         }
//     }
//     return newArray
// }
//
// console.log(sortArray([5, 5, 2, 8, 1, 4]))
// console.log(sortArray([5, 3, 1, 8, 0]))

// 21.
// Наша футбольная команда завершила чемпионат.
// Результаты матчей наших команд записываются в виде набора строк. Каждый матч представлен строкой в формате "x:y", где x очки наших команд и очки y наших противников.
//     Например: ["3:1", "2:2", "0:1", ...]
// Очки за каждый матч начисляются следующим образом:
//     если x > y: 3 очка (победа)
// если x < y: 0 очков (проигрыш)
// если x = y: 1 балл (ничья)
// Нам нужно написать функцию, которая берет этот набор и возвращает количество очков, которое наша команда ( x) набрала в чемпионате по приведенным выше правилам
//     Заметки:
// наша команда всегда играет 10 матчей в чемпионате
// 0 <= х <= 4
// 0 <= у <= 4
// function points(games) {
//     // your code here
//     let sum = games.reduce((acc, el) => {
//         if (el[0] > el[2]) {
//             acc = acc + 3
//             return acc
//         } else if (el[0] < el[2]) {
//             return acc
//         } else {
//             acc = acc + 1
//         } return acc
//     }, 0)
//     return sum
// }
//
// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
// console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
// console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))

// 22.
// Добро пожаловать.
// В этой ката вы должны, учитывая строку, заменить каждую букву ее позицией в алфавите.
// Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.
// "a" = 1, "b" = 2, и т.д.
// Пример
// alphabetPosition("The sunset sets at twelve o' clock.")
// Должен возвращаться "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(в виде строки)
function alphabetPosition(text) {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr = text.toLowerCase().split('')
    console.log(arr)
    return text;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition("The narwhal bacons at midnight."))
// Не решена