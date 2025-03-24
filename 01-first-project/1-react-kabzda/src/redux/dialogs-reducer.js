import { createSlice } from "@reduxjs/toolkit"

// const dialosgs =  [
// 	{ id: 1, online: false, name: "Dimych" , ava: "https://avatars.dzeninfra.ru/get-zen_doc/119173/pub_5c126713379cb200ad4a97e6_5c126c2b1371c600ab5edfcf/scale_1200"},
// 	{ id: 2, online: true, name: "Andrey" , ava: "https://masterpiecer-images.s3.yandex.net/7300c5d5725411eeabdb6ac6a1596643:upscaled"},
// 	{ id: 3, online: true, name: "Sveta" , ava: "https://avatars.mds.yandex.net/get-shedevrum/16106905/img_010fdadaf14211ef82c4caf2840a7b5b/orig"},
// 	{ id: 4, online: false, name: "Sasha" , ava: "https://avatars.mds.yandex.net/get-shedevrum/10254163/img_0c2ff387f10b11ef805132129414c20c/orig"},
// 	{ id: 6, online: true, name: "Viktoria" , ava: "https://avatars.mds.yandex.net/get-shedevrum/14784426/img_05a06c3fefa411efb7328a1f92f7a718/orig"},
// 	{ id: 7, online: true, name: "Viktor" , ava: "https://avatars.mds.yandex.net/get-shedevrum/14784426/img_348f4048f12811efa4f986c50544bce9/orig"},
// 	{ id: 8, online: false, name: "Valera" , ava: "https://avatars.mds.yandex.net/get-shedevrum/15252934/img_a1b0d02eec6411ef95d2561e34a05e01/orig"},
// ]

const dialogsSlice = createSlice({
	// name: 'profile' означает, что все action types будут иметь префикс profile/ , addPost будет иметь тип profile/addPost
	name: 'dialogsPage',
	initialState: {
		messages: [
			{ id: 1, my: false, message: "Hi" },
			{ id: 2, my: true, message: "Zdorova " },
			{ id: 3, my: false, message: "How is your it-kamasutra?" },
			{ id: 4, my: true, message: "Are you stupid?!" },
		],
		dialogs: [
			{ id: 1, online: false, name: "Dimych" , ava: "https://avatars.dzeninfra.ru/get-zen_doc/119173/pub_5c126713379cb200ad4a97e6_5c126c2b1371c600ab5edfcf/scale_1200"},
			{ id: 2, online: true, name: "Andrey" , ava: "https://masterpiecer-images.s3.yandex.net/7300c5d5725411eeabdb6ac6a1596643:upscaled"},
			{ id: 3, online: true, name: "Sveta" , ava: "https://avatars.mds.yandex.net/get-shedevrum/16106905/img_010fdadaf14211ef82c4caf2840a7b5b/orig"},
			{ id: 4, online: false, name: "Sasha" , ava: "https://avatars.mds.yandex.net/get-shedevrum/10254163/img_0c2ff387f10b11ef805132129414c20c/orig"},
			{ id: 6, online: true, name: "Viktoria" , ava: "https://avatars.mds.yandex.net/get-shedevrum/14784426/img_05a06c3fefa411efb7328a1f92f7a718/orig"},
			{ id: 7, online: true, name: "Viktor" , ava: "https://avatars.mds.yandex.net/get-shedevrum/14784426/img_348f4048f12811efa4f986c50544bce9/orig"},
			{ id: 8, online: false, name: "Valera" , ava: "https://avatars.mds.yandex.net/get-shedevrum/15252934/img_a1b0d02eec6411ef95d2561e34a05e01/orig"},
		],
	},                     // 42,        13m
	reducers: {
		addMessage: (state, action) => {
			const newMessage = {
				id: state.messages.length + 1,
				my: true,
				message: action.payload
			}

			state.messages.push(newMessage)
			state.newMessageText = ''
		},
	}
})

export const {addMessage, updateNewMessageText} = dialogsSlice.actions
export default dialogsSlice.reducer


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.body;
			return state;
		case ADD_MESSAGE:
			const newMessage = {
				id: 1,
				my: true,
				message: state.newMessageText
			}
			state.messages.push(newMessage)
			state.newMessageText = ''
			return state;
		default:
			return state;
	}

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (body) => 
	({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

// export default dialogsReducer