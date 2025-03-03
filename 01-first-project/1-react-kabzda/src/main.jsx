import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import store from './redux/redux-store.js'
// import store from './redux/store.js'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'


const root = createRoot(document.getElementById('root'));
                              
const rerenderEntireTree = () => {
  root.render(
    <StrictMode>
      {/* <MyContext.Provider value={user}></MyContext.Provider> */}
      {/* специальный компонент редакса для стора, автоматически оптимизирует перерисаовку компанентов */}
      <Provider store={store}>
      <App />
      </Provider>
    </StrictMode>
  )  
}

rerenderEntireTree(store)

store.subscribe(() => {
  // rerenderEntireTree(store)
  console.log('Состояние изменилось!')
})