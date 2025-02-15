// import mySumNum from "./modules/moduleOne.mjs"

// можно переименовать импортируемые переменные при импорте
import {one as theOne,
			  two as theTwo,
				mult as theMult} from "./modules/moduleOne.mjs"


console.log('__________________________________________ модули _____________________________________')

// const res = mySumNum(10, 2)
// console.log(res)

console.log(theOne, theTwo)
console.log('theMult', theMult(5, theMult(5, 2)))

console.log('__________________________________________ классы _____________________________________')

class Comment {
	constructor(text) {
		this.text = text
		this.votesQty = 0
	}
	upvote() {
		this.votesQty += 1
		return this.votesQty
	}
	// статический метод доступен как свойство класса и не наследуется экземплярами класса
	static mergeComments(first, second) {
		return `${first} ${second}`
	}
}
Comment.mergeComments('First.', 'Second')

const com = new Comment('Heen')
// console.log(com instanceof Comment)
// console.log(com instanceof Object)

com.upvote()
com.upvote()
// console.log(com.text, com.votesQty)

// проверяем являются ли свойства и методы собственными экземпляру класса или были унаследованны
// firstComment.hasOwnProperty('text')    // true
// firstComment.hasOwnProperty('upvote')  // false

console.log('__________________________________________ расширение других классов _____________________________________')
console.log('__________________________________________ !!!!!!!! РАЗОБРАТЬСЯ С REDUCE !!!!!!!!! _____________________________________')
class NumbersArray extends Array {
	// метод sum бшдет доступен для каждого экземпляра класса
	sum() {
		// reduce метод множества, acc === 0 и может увеличиваться с каждой итерацией по элементам массива
		return this.reduce((el, acc) => acc += el, 0)
	}
}
const myArray = new NumbersArray(2, 5, 7)

console.log(myArray)
console.log(myArray.sum())


console.log('__________________________________________ class.__proto__ _____________________________________')
console.log('__________________________________________ промисы _____________________________________')
'промис - это обещание предоставить результат позже'
'промис может вернуть ошибку если результат предоставить невозможно'

'                           состояния промиса'
'                           ожидание - pending'
'                           исполнен - resolved'
'                           отклонён - rejected'

const myPromise = new Promise((resolve, reject) => {
	/**
	 * выполнение асинхронных действий
	 * 
	 * внутри этой функции нужно в результате вызвать одну из функций resolve или reject
	 */
})
myPromise
	.then(value => {
		/**
		 * действия в случае успешного исполнения промиса
		 * значение value - это значение, переданное в вызове функции resolve внутри промиса
		 */
	})
	.catch(error => {
		/**
		 * действие в случае отклонение промиса
		 * значение error - это значение, переданное в вызове функции reject внутри промиса
		 */
	})

// получение данных с помощю fetch api
fetch('https://jsonplaceholder.typicode.com/todos/1')
	// с помощю .json() - вытягиваем данные из ответа, он также возвращает промис поэтому добавляем ещё один метод .then()
	.then(response => response.json())
	// результатом будут уже данные
	.then(json => console.log(json))
	// .catch() - будет вызван если один из промисов будет отменён
	.catch(error => console.error(error))

// const getData = (url) =>
// 	new Promise((resolve, reject) =>
// 		fetch(url)
// 			.then(response => response.json())
// 			.then(json => resolve(json))
// 			.catch(error => reject(error))
// 	)
// getData('http://jsonplaceholder.typicode.com/todos')
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error.message))

console.log('__________________________________________ async/await _____________________________________')
async function asyncFn() {
	// всегда возвращает промис
}
const asyncFfn = async () => {
	// всегда возвращает промис
	return 'sdfs'

}	

const asyncFun = async () => {
	// return 'Success!'
	// выбросить ошибку
	throw new Error('Tere was an error!')
}
asyncFun()
	.then(data => console.log(data))
	.catch(error => console.log(error.message))

'                                               await'
const timerPromise = () =>
	new Promise((resolve, reject) =>
	setTimeout(() => resolve(), 2000))

const asyncFunc = async () => {
	console.log('Timer starts')
	const startTime = performance.now()
	await timerPromise()
	const endTime = performance.now()
	console.log('Timer end', endTime - startTime)
}
asyncFunc()

let getDataa = (url) =>
	new Promise((resolve, reject) =>
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	)
getDataa('http://jsonplaceholder.typicode.com/todos')
	.then(data => console.log(data))
	.catch(error => console.log(error.message))

// переписываем функцию с помощю async/await
getDataa = async (rul) => {
	const res = await fetch(url)
	const json = await res.json()
	return json
}

const url = 'http://jsonplaceholder.typicode.com/todos'

try {
	const data = await getDataa(url)
	console.log(data)
} catch (error) {
	console.log(error.message)
}