import classes from "./Button.module.css";

// console.log(classes)
// чтобы получить children в функции где выхываем этот компонент, вызываем этот компонент с помощю двух тегов
// между которыми редаём нужный тест

// вторым параметром передаём функцию обработчик клика передаванную во время рендеринга из компонента App.jsx
// и прокидываем её в слушатель клика нашей кнопки
// КОМПОНЕНТ ОЖИДАЕТ ПЕРЕМЕННЫЕ И ФУНКЦИИ С ИМEНАМИ УКАЗАННЫМИ В ПАРАМЕТРАХ
// ЧАСТЫЙ ПАТТЕРН ИСПОЛЬЗУЕМЫЙ В РК ...props
// ... rest это сразу и *args и **kwargs собирает оставшиеся элементы,  а ... spred распаковывает обьект/массив на элементы
export default function Button({ children, isAct, ...props}) {

  const handleMouseEnter = () => console.log(`Mouse over ${children}`);

  // let classes = 'button'
  // if (isAct) classes += ' active'
  // return (
  //   <button className={classes} onClick={onPress}>
  //     {children}
  //   </button>
  // )

  // если возвращаем одну строчку то круглые скобки писать не обязательно
  return (
    <button
      { ...props }
      className={isAct ? `${classes.button} ${classes.active}` : classes.button}
      onMouseEnter={() => handleMouseEnter()}
    >
			{/* отрисовываем терст переданный в теге */}
      {children}
    </button>
  );
}
