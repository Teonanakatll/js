console.log('__________________________________________ массивы _____________________________________')
// массивы - это обьекты с цифровыми именами свойств
let myArray = [1, 2, 3]
const myArray2 = new Array(1, 2, 3, [0, 1], true, 'Bogdan')
const myArray3 = new Array(1, 2, 3, [0, 1], true, 'Bogdan')
const myArray4 = myArray3
// console.log(myArray2 === myArray3)   // ссылки на разные массивы
// console.log(myArray3 === myArray4)   // ссылки на один и тот же массив
// console.log(myArray, myArray2[3][1], myArray2.length)

myArray[myArray.length] = 'fuck'
myArray[myArray.length] = 'you!'

myArray.push(999)  			 // добавляем значение в конец массива
myArray.push(0)
myArray.unshift(true)   // добавляет элемент в начало массива

myArray.pop()    // удаляет последний элемент массива и возвращает удалённый элемент
myArray.shift()    // удаляет первый элемент массива и возвращает удалённый элемент

// console.log(myArray)
// console.log(remove)


console.log('__________________________________________ foreach _____________________________________')
// метод foreach не меняет исходный массив
const myArr = [1, 2, 3]
const ress = myArr.forEach(el => el * 2)
// console.log('ress', ress)

// console.log('myArr:', myArr)
// метод map возвращает новый массив результатов применения переданной функции к каждому элементу осносного массива
let resMap = myArr.map(el => el * 3)
// console.log('resMap:', resMap)
// console.log('myArr:', myArr)

// Если есть фигурные скобки → нужно явно использовать return, иначе функция не вернёт ничего (undefined)
resMap = myArr.map((el) => {
	return el * 5
})
// console.log('resMap:', resMap)

resMap = myArr.map(function (el) {
	return el * 5
})
// console.log('resMap:', resMap)

console.log('__________________________________________ деструктуризация ____________________________')
// обьявление новых переменных и присваивание значений на основе значений 
// свойств обьекта в одной строке с помощю {}
const userProfile = {
	name: 'Bogdan',
	commentsQty: 23,
	hasSingnedAgreement: false
}
const {name, commentsQty} = userProfile
const {hasSingnedAgreement} = userProfile

// console.log(name)
// console.log(hasSingnedAgreement)

// _______________________________________ деструктуризация в массиывах _______________________________
const fruits = ['Apple', 'Banana']
const [fruitOne, fruitTwo] = fruits
// console.log('fruitOne:', fruitOne)
// console.log('fruitTwo:', fruitTwo)

// _______________________________________ деструктуризация в функциях _______________________________
const userProf = {
	name: 'Bogdan',
	commentsQty: 23,
	hasSingnedAgreement: true
}
const userInfo = ({name, commentsQty}) => {
	if (!commentsQty) {
		console.log('ok')
		return `User ${name} has no comments`
	}
	console.log('okk')
	return `User ${name} has ${commentsQty} comments`
}
// userInfo(userProf)

console.log('__________________________________________ условные инструкции ____________________________')
let person = {
	age: 20,
	name: 'Teon'
}

// if (!person.name) - если свойства нет или свойство ложно
if (!person.name) {
	console.log('Имя не указанно');

} else if (person.name === 'Te') {
	console.log(`Здарова ${person.name}`);

} else {
	console.log(`Здарова пользователь ${person.name}`)
}

// использование if в функциях
const sumPositiveNumbers = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'One of the arguments is not a number'
	}
	if (a <= 0 || b <= 0) {
		return 'Numbers are not positive'
	}
	return a + b
}
sumPositiveNumbers(true, 0)
// console.log(sumPositiveNumbers(5, 0))

console.log('__________________________________________ инструкция switch ____________________________')
const month = 2
switch (month) {
	case 12:
		console.log('Декабрь')
		break
	case 1:
		console.log('Январь')
		break
	case 2:
		console.log('Февраль')
		break
	default:
		console.log('Это не зимний месяц')
}

console.log('__________________________________________ тернарный оперетор ____________________________')
// условие ? выражение 1 : выражение 2
// условие
// 	? выражение 1
// 	: выражение 2
// если условие правдиво то возвращается выражение 1, если ложно возвращается выражение 2
let value = 11
// value
// 	? console.log('true')
// 	: console.log('false')

console.log(value >= 0 ? -value : value)

value = -5
// присваивание результата тернарного оператора переменной
const res = value >= 0 ? value : -value
console.log(res)

console.log('___________________ циклы: for, for ... in ..., while, do ... while, for ... of ... _________________')

console.log('//                                                                      цикл for')

// обьявление переменной, условие счётчика, увеличение счётчика на 1
for (let i = 0; i < 5; i++) {
	console.log(i)
}

let myNums = ['first', 'second', 'third']

// обьявление переменной, условие счётчика, увеличение счётчика на 1
for (let i = 0; i < myNums.length; i++) {
	console.log(i, myNums[i])
}

// через метод массивов foreach можно получить доступ к элементам массивов и (опционально) к их индексам
myNums.forEach((element, index) => {
	console.log(element, index)
})

console.log('//                                                                      цикл while')
let i = 0
while (i < 5) {
	console.log(i)
	i++
}

console.log('//                                                                      цикл do while');
// выполняется хотябы 1 раз потому что инструкция находится перед условием
i = 10
do {
	console.log(i)
	i++
} while (i < 5)

console.log('//                                                                      цикл for in');
// for...in предназначен для перебора свойств объекта (ключей), а не элементов массива
// блок инструкций выполняется для каждого свойства обьекта
for (key in Object) {
	// действие с каждым свойством обьекта, key - название свойства обьекта
	// значение свойства - Object[key]
}

let myObj = {
	x: 10,
	y: true,
	z: 'abc'
}
for (const key in myObj) {
	console.log(key, myObj[key])
}

console.log('//                                                                      цикл foreach для обьектов');
// с помощю метода Object.keys() можно получитьвсе ключи обьекта в виде масива названий в виде строк
Object.keys(myObj).forEach(key => {
	console.log(key, myObj[key])
})
// с помощю метода Object.values() можно получить массив со значениями свойств
Object.values(myObj).forEach(value => {
	console.log(value)
})
// с помощю метода Object.entries() можно получить массив с ключами и значениями свойств
Object.entries(myObj).forEach((key, value) => {
	console.log(key, value)
})
console.log('Object.keys(myObj) → dict.keys(); Object.values(myObj) → dict.values(); Object.entries(myObj) → dict.items()')

console.log('//                                                                      цикл for in для массивов');
let myArrr = [true, 10, 'abc', null]
// kонстанта key получает индекс всех элементов в массиве !!!!! ДЛЯ МАССИВОВ ЛУЧШЕ ИСПОЛЬЗОВАТЬ РОДНОЙ МЕТОД МАССИВОВ FOREACH
for (const key in myArrr) {
	console.log(myArrr[key])
}

console.log('//                                                                      цикл for of');
// для обьетов нельзя использовать потому что обьект не итерируемый 
// for (Element of Iterable) {
// 	// действие с определённым элементом
// }

//                                                       !!!!! ДЛЯ МАССИВОВ ЛУЧШЕ ИСПОЛЬЗОВАТЬ РОДНОЙ МЕТОД МАССИВОВ FOREACH
const myString = 'Hey'
for (const letter of myString) {
	console.log(letter)
}