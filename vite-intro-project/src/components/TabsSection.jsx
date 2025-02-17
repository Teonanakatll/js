import Button from "./Button/Button"

// из родительского компанента принимаем два пропса: стейт и функцию изменения стейта
export default function TabSection({ active, onChange }) {
	return (
		<section style={{ marginBottom: '1rem' }}>
			{/* КОМПОНЕНТ ОЖИДАЕТ ФУНКЦИИ И ПЕРЕМЕННЫЕ ИЗ ТЕГОВ С ИМЕНАМИ УКАЗАННЫМИ У НЕГО В ПАРАМЕТРАХ ФУНКЦИИ
					формируем булево значение true/false взависимости от переданного стейта чтобы присвоить активный класс нажатой кнопке, и передаём дальше
					функцию смены стейта в которую передаём значение связанное с отдельной кнопкой*/}
			<Button isAct={active === 'main'} onClick={() => onChange('main')}>Главноя</Button>
			<Button isAct={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
			<Button isAct={active === 'effect'} onClick={() => onChange('effect')}>Effect</Button>
		</section>
	)
}