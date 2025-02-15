import "./Button.css";


// чтобы получить children в функции где выхываем этот компонент, вызываем этот компонент с помощю двух тегов
// между которыми редаём нужный тест

// вторым параметром передаём функцию обработчик клика передаванную во время рендеринга из компонента App.jsx
// и прокидываем её в слушатель клика нашей кнопки
export default function Button({ children, onPress, isAct }) {

  const handleMouseEnter = () => console.log(`Mouse over ${children}`);

  let classes = 'button'
  if (isAct) classes += ' active'
  return (
    <button className={classes} onClick={onPress}>
      {children}
    </button>
  )

  // если возвращаем одну строчку то круглые скобки писать не обязательно
  // return (
  //   <button
  //     className={isAct ? 'button active' : 'button'}
  //     onClick={onPress}
  //   >
	// 		{/* отрисовываем терст переданный в теге */}
  //     {children}
  //   </button>
  // );
}
