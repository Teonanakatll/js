// const objectA = {
// 	a: 10,
// 	b: true,
// }
// console.log(objectA)
// const objectB = objectA

// objectB.a = 11
// objectB.c = null
// objectB.x = undefined
// objectB.xren = 'Bogdan'
// console.log(objectB)

function a() {
	console.log('Hren')

}
a = 5
// console.log(a)

// стрелочная функция
const b = () => {
	console.log('Hey here')
}
// b()

const mySity = {
	city: 'New York'
}
mySity['popular'] = true

const countryPropertyName = 'country'
mySity[countryPropertyName] = 'USA'

// console.log(mySity)

delete mySity.country
// console.log(mySity)

//                                сокращённый формат записи свойста
console.log('_______________________ сокращённый формат записи свойств _____________________________')
console.log('')
const name = 'Bogdan'
const postQty = 23

const userProfile = {
	name,
	postQty,
	hasSingnedAgreement: false
}
// console.log(userProfile)

//                              методы - свойства обьектов, которые содержат функции
console.log('________________________________________ методы - свойства обьектов, которые содержат функции ___________________________')
console.log('')

const mySit = {
	city: 'New York',
	cityGreeting: function () {
		console.log('Greetings!!');
	},
	// сокращённый формат записи методов
	cityGreet() {
		console.log('Greet!!');
	}
}
// mySit.cityGreeting()
// mySit.cityGreet()

//                         конвертация json в djavascript обьект и обратно

let bb = {
	userId: 1,
	id: 1,
	title: 'Test title',
	status: {
		complited: false
	}
}
// console.log(bb);

bb = JSON.stringify(bb)   // получаем javascript обьект из json
// console.log(bb);

bb = JSON.parse(bb)       // получаем json из обьекта
// console.log(bb)

//                                     мутация в js
console.log('__________________________________________ мутация в js, и как их избежать _____________________________________')
const person = {
	name: 'bob',
	age: 25
}
const person2 = person
person2.age = 26
person2.isAdult = true
// console.log(person);

console.log('_______ 1 Object.assing({}, person) создвёт новый обьекта и присвоит в него все свойства переданного обьекта ___')
const person3 = {
	name: 'bob',
	age: 25
}

// можно только избежать изменение коренных свойств обьекта, вложенные обьекты так и будут назначаться в виде ссылок
const copy = Object.assign({}, person3)
// ссылки на вложенные обьекты также остаются
const copy2 = { ...person3}
// полностью избегаем мутации на всех уровнях
const copy3 = JSON.parse(JSON.stringify(person3))

copy.age = 26
copy.isAdult = true
// console.log(person3);
// console.log(copy);

console.log('__________________________________________ функции _____________________________________')
function sum(c, d) {
	const f = c + d
	return console.log(f);
}
// sum(3, 5)
// console.dir(sum)

console.log('_________ передача значения по ссылке ________')
// внутри функции не рекомендуется мутировать обьекты
const personOne = {
	name: 'Bob',
	age: 21
}
function increasePersonAge(person) {
	person.age += 1
	return person
}
// const kk = increasePersonAge(personOne)
// console.log(kk.age);

// рекомендуется создавать копию обьекта перед изменением чтобы не менять исходный обьект
function incPersonAge(person) {
	const updataPerson = Object.assign({}, person)
	updataPerson.age += 1
	return updataPerson
}
const per = incPersonAge(personOne)
// console.log(per.age);

console.log('_________ колбэк функции ________')
function anotherFunction() {
	console.log('callback');
}
function fnWithCallback(callbackFunction) {
	callbackFunction()
}
// fnWithCallback(anotherFunction)

function printMyName() {
	console.log('Bogdan');
}
// setTimeout(printMyName, 3500)

function myFn(a) {
	const temp = a
	function innerFn(f) {
		console.log(f)
	}
	innerFn(temp)
}
// myFn(5)

console.log('_________ операторы ________')
// ! - не, && - и, || - или, === - сравнивает тип и значение, !== - не равно

console.log('_________ оператор ... ________')
// ... разбор обьекта на свойства
const button = {
	width: 200,
	text: 'Buy'
}
const redButton = {
	...button,  // необходимо прописывать вначале чтоб его значения не перезаписались
	color: 'red'
}
const blueButton = {
	background: 'black'
}
const newButton = {
	...redButton,
	...blueButton
}
// console.log(newButton)

console.log('__________________________________________ конкатенация строк _____________________________________')
let helloWorld = 'Hello' + ' world'

const hello = 'Hello'
const world = ' world'

helloWorld = hello + ' ' + world
helloWorld = `${hello} ${world}`

console.log(helloWorld)

function my() {
	return 'Меня зовут Богдан, я програмист!'
}
const me = `${my()} ` + 10
console.log(me)

console.log('___________________________ присваивание функционального выражения функции ____________________')
const myFunction = function(a, b) {
	let c
	a = c + b
}
myFunction(5, 3)

// setTimeout(function() { console.log('Message')}, 1000)

console.log('__________________________________________ стрелочная функция _____________________________________')
const arrow = (a, b) => {
	let c
	c = a + b
	return c
}
// console.log(arrow(3, 5))
// setTimeout(() => { console.log('Message')}, 1000)

// если у стрелочной функции только один параметр то скобки можно опустить
const arrow2 = a => {
	let c
	c = a + 1
	console.log(c)
}
// arrow2(5)

// если стр. ф. состоит только из одного выражения то фигурные скобки можно опустить и функция неявно вернёт результат
const fire = (a, b) => a + b
// console.log(fire(4, 5))

let multByFactor = (value, mult = 3) => value * mult
console.log(multByFactor(5))

multByFactor = function(value, mult = 3) {
	return value * mult
}
// console.log(multByFactor(7))

// Для неявного возврата обьекта используем круглые скобки, потому что стрелочная функция будет ожидать выражение функции по умолчанию
const newPost = (post, addedAt = Date()) => ({
	...post,
	addedAt
})

// пример с явным возвратом обьекта
const newPost2 = (post, addedAt = Date()) => {
	const temp = {
		...post,
		addedAt
	}
	return temp
}

const firstPost = {
	id: 1,
	author: 'Bogdan'
}
// console.log(newPost(firstPost))
// console.log(newPost2(firstPost))

console.log('__________________________________________ обработка ошибок _____________________________________')
const fnWithError = () => {
	throw new Error('Some error !!!!!!!!!!!!!!!!!!')
}

try {
	fnWithError()
} catch (error) {
	console.error(error)
	console.log(error.message)
}

console.log('continue...')