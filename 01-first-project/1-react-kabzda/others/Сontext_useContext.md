> Создание контекста:
> Мы создаём контекст с помощью React.createContext().
> Это даёт нам объект с двумя свойствами: Provider и Consumer. Мы будем использовать Provider и useContext.
> 
> Добавление значения:
> Мы оборачиваем компоненты в <MyContext.Provider value={value}>.
> Всё, что находится внутри Provider, может получить доступ к значению value.
> 
> Извлечение значения:
> Внутри любого компонента, который находится внутри Provider, мы можем использовать useContext(MyContext), чтобы получить значение.

 
```js
import React, { useContext } from 'react';

// 1. Создаём контекст
const MyContext = React.createContext();

// 2. Добавляем значение в контекст
function App() {
  const user = { name: 'Алиса', age: 25 }; // Объект, который мы хотим передать

  return (
    <MyContext.Provider value={user}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

// 3. Извлекаем значение из контекста
function ChildComponent() {
  const user = useContext(MyContext); // Получаем объект из контекста

  return (
    <div>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
    </div>
  );
}

export default App;

```

***                                     пример использования connect**

```jsx
const mapStateToProps = (state) => {
  return {
    adialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = () => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewMessageText(text))
    },
    addMessage: () => {
      dispatch(addMessage())
    }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)