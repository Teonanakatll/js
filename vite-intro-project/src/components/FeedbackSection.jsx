import { useState, useRef } from "react"
import Button from "./Button/Button"

function StateVsRef() {
	// useRef() – это хук в React, который создаёт изолированное хранилище данных, которое не 
	// вызывает ререндеринг компонента при изменении.
	const input = useRef()
	const [show, setShow] = useState(false)
	// const [value, setValue] = useState('')

	function handleKeyDown(event) {
		if (event.key === 'Enter') {
			setShow(true)
		}
	}
	

	return (
		<div>
			{/* input.current - значение нативного дум элемента */}
			<h3>Input Value: {show && input.current.value}</h3>
			<label htmlFor="newInput">Новый инпут</label>
			{/* при срабатывании сл. onChange берём событие и с помощю его данных обновляем значение стейта */}
			<input
			// type="text" value={value} id="newInput" onChange={(e) => setValue(e.target.value)} className="control" />
			ref={input}
			onKeyDown={handleKeyDown}
			type="text" id="newInput" className='control' />
		</div>
	)
}

export default function FeedbackSection() {
	// выставляем в стейты значения необходимые по умолчанию
	// const [name, setName] = useState('')
	// const [reason, setReason] = useState('help')
	// const [hasError, setHasError] = useState(true)

	const [form, setForm] = useState({
		name: '',
		newImport: '',
		hasError: false,
		reason: 'help',
	})


	// в аргумент функции попадает событие переданное обработчиком инпута onChange
	function handleNameChange(event) {
		// // внутри обработчика достаём event.target.value, чтобы узнать текущее значение инпута
		// setName(event.target.value)
		// // если длинна сообщения
		// setHasError(event.target.value.trim().length === 0)

		// Важно понимать, что setForm не обновляет отдельные свойства, а заменяет весь объект. Поэтому надо делать так:
		// создаём новый обьект, копируем старые свойтсва и заменяем необходимые данные
		setForm((prev) => ({
			...prev,
			name: event.target.value,
			hasError: event.target.value.trim().length === 0,
		}))
	}

	// функция тоглит стейт hasError, тоесть устанавливает булевое значение противоположное текущему
	function toggleError() {
		// Когда ты обновляешь состояние, React может оптимизировать процесс и не всегда сразу обновлять состояние в реальном времени.
		// Когда ты используешь prev, ты гарантируешь, что новое состояние будет зависеть именно от предыдущего, даже если React обновляет 
		// состояние асинхронно. Это позволяет избежать ошибок, когда несколько обновлений состояния могут "переписать" друг друга.
		// setHasError((prev) => !prev)

	}

	return (
		<section>
			<h3>Обратная связь</h3>

			<button onClick={toggleError}>Toggle Error</button>

			<form style={{marginBottom: '1rem'}}>
				<label htmlFor="name">Ваше имя</label>

				{/* onChange — это встроенный обработчик событий для элементов формы в HTML, который отслеживает изменения в <input>, 
				<textarea>, <select> и других элементах формы. срабатывает на каждое изменение сразу (по мере ввода символов).*/}
				<input id="name" type="text" className="control" value={form.name}
				// у значения строчной переменной name убираем пробелы и ели длинна больше 0 возвращаем null иначе устанавливаем красный бордер
				style={{ border: form.hasError ? '1px solid red' : null }}
				onChange={handleNameChange}
				/>

				<label htmlFor="reason">Причина обращения</label>
				<select 
				id="reason" 
				className="control"
				value={form.reason}
				// так как это не отдельный стейт а стейт с разными обьектами чтобы не сбрасывались остальные стейты берём распаковываем в новый
				// обьект предыдущее состояние и после этого меняем состояние необходимого обьекта

				// Стрелочные функции в JavaScript, как и обычные функции, могут иметь "тело". Но вот фишка: если тело функции 
				// заключено в фигурные скобки, то это подразумевает, что функция должна явно возвращать что-то через return
				onChange={event => setForm((prev) => ({ ...prev, reason: event.target.value}))}>
					<option value="error">Ошибка</option>
					<option value="help">Нужна помощ</option>
					<option value="suggest">Предложение</option>
				</select>
				
				{/* Часто используют {JSON.stringify(state, null, 2)} для отладки, чтобы увидеть текущее состояние компонента. */}
				<pre>
						{/* form – объект, который нужно преобразовать.
								null – параметр для обработки значений (чаще всего не нужен, поэтому null).
								2 – отступ (количество пробелов для форматирования). */}
						{JSON.stringify(form, null, 2)}
				</pre>

				{/* если переменная disabled true кнопка будет заблокированна и наоборот */}
				<Button disabled={form.hasError} isAct={!form.hasError}>Отправить</Button>

			</form>

			<hr />
			<StateVsRef />

		</section>
	)
}