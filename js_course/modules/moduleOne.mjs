// 1. модули должны быть одноцелевыми
// 2. распологать все export инструкции внизу файла
// 3. по возможности используйте export default

const sum = (a, b) => a + b
const one = 1
const two = 'two'

export {one, two, mult}

// если из модуля мы делаем дефолтный экспорт одной переменной то в другом модуле можно экспортировать его под любым именем
// export default sum

// console.log(myName)

const mult = (a, b) => a * b

