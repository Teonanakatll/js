// import { combineReducers, legacy_createStore as createStore } from "redux"
// npm i @reduxjs/toolkit react-redux
import { configureStore } from "@reduxjs/toolkit"
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import navBarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'

let store = configureStore({
	reducer: {
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		usersPage: usersReducer,
		navBar: navBarReducer,
	}
})

// window.stor = store;

export default store