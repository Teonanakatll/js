***                                useNavigate() (замена useHistory)**
> 
> useNavigate заменяет useHistory и предоставляет функцию для управления навигацией.
> 
> Основные методы:
> navigate(path): Переход на новый маршрут.
> 
> navigate(path, { replace: true }): Замена текущего маршрута (без добавления в историю).
> 
> navigate(-1): Возврат на предыдущую страницу.
> 
> navigate(1): Переход на следующую страницу.

```js
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-path'); // Переход на новый маршрут
  };

  return (
    <button onClick={handleClick}>Go to New Path</button>
  );
};

export default MyComponent;
```

***                                              useLocation()**

> useLocation остался без изменений и предоставляет доступ к объекту location, который содержит информацию о текущем маршруте.
> 
> Основные свойства:
> location.pathname: Текущий путь (например, /profile/123).
> 
> location.search: Query-параметры (например, ?name=John&age=30).
> 
> location.hash: Хэш (например, #section1).
> 
> location.state: Состояние, переданное при переходе (например, через navigate(path, { state })).
```js
import { useLocation } from 'react-router-dom';

const MyComponent = () => {
  const location = useLocation();

  return (
    <div>
      <p>Current Path: {location.pathname}</p>
      <p>Query Params: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
};

export default MyComponent;
```

***                                              useParams()**

> useParams остался без изменений и предоставляет доступ к параметрам маршрута (например, userId в /profile/:userId).
```js
import { useParams } from 'react-router-dom';

const MyComponent = () => {
  const { userId } = useParams();

  return <div>User ID: {userId}</div>;
};

export default MyComponent;
```

***                                              useMatch() (замена useRouteMatch)**


> useMatch заменяет useRouteMatch и предоставляет информацию о том, как текущий маршрут совпадает с URL.
> 
> Основные свойства:
> match.pathname: Текущий путь (например, /profile/123).
> 
> match.params: Параметры маршрута (например, { userId: '123' }).
> 
> match.pattern: Шаблон маршрута (например, /profile/:userId).

```js
import { useMatch } from 'react-router-dom';

const MyComponent = () => {
  const match = useMatch('/profile/:userId');

  return (
    <div>
      <p>Route Path: {match.pattern.path}</p>
      <p>Current URL: {match.pathname}</p>
      <p>User ID: {match.params.userId}</p>
    </div>
  );
};

export default MyComponent;
```

***                                              useSearchParams (новый хук)**

> useSearchParams предоставляет доступ к query-параметрам и позволяет их изменять.
> 
> Основные методы:
> searchParams.get(key): Получение значения query-параметра.
> 
> setSearchParams(params): Установка новых query-параметров.

```js
import { useSearchParams } from 'react-router-dom';

const MyComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = () => {
    setSearchParams({ name: 'John', age: '30' }); // Установка новых query-параметров
  };

  return (
    <div>
      <p>Name: {searchParams.get('name')}</p>
      <p>Age: {searchParams.get('age')}</p>
      <button onClick={handleChange}>Change Params</button>
    </div>
  );
};

export default MyComponent;
```

```js
import { useNavigate, useLocation, useParams, useMatch, useSearchParams } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = useParams();
  const match = useMatch('/profile/:userId');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleGoBack = () => {
    navigate(-1); // Возврат на предыдущую страницу
  };

  const handleChangeParams = () => {
    setSearchParams({ name: 'John', age: '30' }); // Установка новых query-параметров
  };

  return (
    <div>
      <p>User ID: {userId}</p>
      <p>Current Path: {location.pathname}</p>
      <p>Route Path: {match.pattern.path}</p>
      <p>Query Params: {location.search}</p>
      <button onClick={handleGoBack}>Go Back</button>
      <button onClick={handleChangeParams}>Change Query Params</button>
    </div>
  );
};