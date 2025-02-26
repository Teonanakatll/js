import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import state, { subscribe } from './redux/state.js'
import './index.css'
import App from './App.jsx'

import { addPost, updateNewPostText } from './redux/state.js'
import { addMessage, updateNewMessage } from './redux/state.js'

const root = createRoot(document.getElementById('root'));
                              
const rerenderEntireTree = (state) => {
  root.render(
    <StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
      addMessage={addMessage} updateNewMessage={updateNewMessage} />
    </StrictMode>,
  )  
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)