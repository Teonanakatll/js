import { useState, useRef, useEffect, useCallback } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"
import useInput from "../hooks/useinput"

// function Example() {
//   const [count, setCount] = useState(0);
//   const refValue = useRef(0);
//   let normalVariable = 0; // Обычная переменная
// 	console.log("Компонент вызван!");

//   refValue.current += 1; 
//   normalVariable += 1;

//   return (
//     <div>
//       <p>Count (state): {count}</p>
//       <p>Ref: {refValue.current}</p>
//       <p>Variable: {normalVariable}</p>
//       <button onClick={() => setCount(count + 1)}>Увеличить</button>
//     </div>
//   );
// }


export default function EffectSection() {
	// вызываем кастомный хук
	const input = useInput()
	const [modal, setModal] = useState(false)
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])

	// function openModal() {
	// 	return setModal(true)
	// 	// если нужен тогл стейта
	// 	// return setModal(!modal)
	// }

		// получается при каждом изменении стейта компонент перерисовывается и реакт сново создаёт эту функцию
	// async function fetchUsers() {
	// 	setLoading(true)
	// 	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	// 	const users = await response.json()
	// 	setUsers(users)
	// 	setLoading(false)
	// }

	const fetchUsers = useCallback(async () => {
		setLoading(true)
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const users = await response.json()
		setUsers(users)
		setLoading(false)
	}, [])



	// Выполняется только при первом рендере (аналог componentDidMount)
	useEffect(() => {
		// также осинхронную функцию с запросом можно обьявить здесь чтоб она не создавалась заново при изменениях стейтов
		fetchUsers()
	}, [fetchUsers])

	return (
		<section>
			<h3>Effect</h3>

			{/* <Example /> */}

			<Button style={{marginBottom: '1rem'}} onClick={() => setModal(true)}>Открыть информацию</Button>

			<Modal open={modal}>
				<h3>Hello from modal</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quibusdam excepturi quisquam, aperiam rerum at minus saepe eligendi cum impedit nobis blanditiis pariatur repudiandae libero! Laudantium eaque corporis ab quos?
				</p>
				<Button onClick={() => setModal(false)}>Close modal</Button>
			</Modal>

			{loading && <p>Loading...</p>}

			{!loading && (
				<>
					{/* распаковываем кастомный хук */}
					<input type="text" className="control" {...input} />
					<h6>{input.value}</h6>
					<ul>
						{/* фильтруем массив по именам которые содержат слова из инпута */}
						{users.filter(user => user.name.toLowerCase().includes(input?.value?.toLowerCase())).map(user => (
							<li id={user.id}>{user.id} - {user.name}, email: {user.email}</li>
						))}
					</ul>
				</>
			)}
		</section>
	)
}