import { createSlice } from "@reduxjs/toolkit"
import kaban	from "../assets/img/kaban.jpg"
import { profileAPI, usersAPI } from "../api/api";
import { useSelector } from "react-redux";

const profileSlice = createSlice({
	// name: 'profile' означает, что все action types будут иметь префикс profilePage/ , addPost будет иметь тип profile/addPost
	name: 'profilePage',
	initialState: {
      // profile: {},
			isFetching: false,
      newPostText: 'it-kamasutra.com',
			posts: [
				{id: 1, message: "Всё ок", likesCount: 8, img: kaban},
				{id: 2, message: "Учу реакт", likesCount: 5, img: kaban},
				{id: 3, message: "Что тут происходит", likesCount: 3, img: kaban},
				{id: 4, message: "Кто здесь?", likesCount: 100, img: kaban},
				{id: 5, message: "Опять накосячил?...", likesCount: 50, img: kaban},
			],
			profile: null,
			status: ""
		},                     
	reducers: {
		addPost: (state) => {
			
			const newPost = {
					id: state.posts.length + 1,  // Автоматически генерируем ID
					message: state.newPostText,
					likesCount: 5,
					img: kaban
				};
			state.posts.push(newPost);  // Иммутабельность "из коробки" благодаря Immer
			state.newPostText = '';
		},
		updateNewPostText: (state, action) => {
			// Параметр payload — это данные, которые передаются в action. В Redux Toolkit каждый action автоматически
			//  получает свойство payload, если вы передаёте аргумент в action creator.
			state.newPostText = action.payload   // payload содержит данные
		},
		setUserProfile: (state, action) => {
			state.profile = action.payload
		},
		setStatus: (state, action) => {
			// debugger
			state.status = action.payload
		},
		toggleIsFetching: (state, action) => {
			state.isFetching = action.payload
		}
	}
})

export const getProfile = (userId) => async (dispatch) => {
	// debugger
	const profile = await usersAPI.getProfile(userId)
		dispatch(setUserProfile(profile))

	}

export const getStatus = (userId) => async (dispatch) => {
	const status = await profileAPI.getStatus(userId)
	dispatch(setStatus(status))
}

export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status)
	if (response.resultCode === 0) {
		dispatch(setStatus(status))
	}
	
}

export const {addPost, updateNewPostText, setUserProfile, setStatus, toggleIsFetching} = profileSlice.actions
export default profileSlice.reducer


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReduser = (state, action) => {
	
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: 1,
				message: state.newPostText,
				likesCount: 5
			}
			state.posts.push(newPost)
			state.newPostText = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state
		default:
			return state
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

// export default profileReduser