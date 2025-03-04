import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import store from './redux/redux-store.js'
// import store from './redux/store.js'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
    <StrictMode>
      {/* <MyContext.Provider value={user}></MyContext.Provider> */}
      {/* специальный компонент редакса для стора, автоматически оптимизирует перерисаовку компанентов */}
      <Provider store={store}>
      <App />
      </Provider>
    </StrictMode>
  )  


store.subscribe(() => {
  // rerenderEntireTree(store)
  console.log('Состояние изменилось!')
})