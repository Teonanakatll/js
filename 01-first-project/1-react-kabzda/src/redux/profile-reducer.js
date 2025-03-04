import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
	// name: 'profile' означает, что все action types будут иметь префикс profilePage/ , addPost будет иметь тип profile/addPost
	name: 'profilePage',
	initialState: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 11 },
        { id: 2, message: "It's my first post", likesCount: 12 },
        { id: 3, message: "What is it man?", likesCount: 5 },
        { id: 4, message: "I'm ready up and runing!", likesCount: 100 },
      ],
      newPostText: 'it-kamasutra.com'
		},                     
	reducers: {
		addPost: (state) => {
			
			const newPost = {
					id: state.posts.length + 1,  // Автоматически генерируем ID
					message: state.newPostText,
					likesCount: 5,
				};
			return {...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			}


			// let stateCopy = {...state}
			// stateCopy.posts = [...state.posts]
			// stateCopy.posts.push(newPost)
			// stateCopy.newPostText = ''
			// return stateCopy

			// state.posts.push(newPost);  // Иммутабельность "из коробки" благодаря Immer
			// state.newPostText = '';
		},
		updateNewPostText: (state, action) => {
			return { ...state, newPostText: action.payload }

			// const stateCopy = {...state}
			// stateCopy.newPostText = action.payload
			// return stateCopy

			// Параметр payload — это данные, которые передаются в action. В Redux Toolkit каждый action автоматически
			//  получает свойство payload, если вы передаёте аргумент в action creator.
			// state.newPostText = action.payload   // payload содержит данные
		}
	}
})

export const {addPost, updateNewPostText} = profileSlice.actions
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