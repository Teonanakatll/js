import { ways } from "../data";
import WayToTeach from "./WayToTeach";

export default function TeachingSection() {
	return (
		<section>
			<h3>Наш подход к обучению</h3>
			<ul>
			{/* метод map возвращает новый массив результатов применения переданной функции к каждому элементу осносного массива,
					если возвращаемое значение пишется в одну строчку можно вернуть значение неявно, иначе - { return <WayToTeach .../> }
					КАЖДЫЙ ЧАЙЛД В СПИСКЕ ДОЛЖЕН СОДЕРЖАТЬ УНИКАЛЬНЫЙ КЛЮЧ */}
				{ways.map(way => <WayToTeach key={way.title} {...way} />)}
				{/* <WayToTeach
					title={ways[0].title}
					description={ways[0].description}
				/> */}
				{/* это спред-оператор (spread operator), который разворачивает объект ways[1] и передаёт его свойства в компонент WayToTeach как пропсы */}
				{/* <WayToTeach {...ways[1]}/>
				<WayToTeach {...ways[2]}/>
				<WayToTeach {...ways[3]}/> */}
			</ul>
		</section>
	)
}