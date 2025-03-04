import { createSlice } from "@reduxjs/toolkit"

const navBarSlice = createSlice({
	// name: 'profile' означает, что все action types будут иметь префикс profile/ , addPost будет иметь тип profile/addPost
	name: 'navBar',
	initialState: {
		sideBar: [{ id: 1, online: false, name: "Dimych" , ava: "https://avatars.dzeninfra.ru/get-zen_doc/119173/pub_5c126713379cb200ad4a97e6_5c126c2b1371c600ab5edfcf/scale_1200"}]
	},                     // 42,        13m
	reducers: {
		getOnlineUsers: (state, action) => {
			state.sideBar = action.payload.filter(dialog => dialog.online)

		}
	}
})

export const { getOnlineUsers } = navBarSlice.actions
export default navBarSlice.reducer

const GET_ONLINE_USERS = 'GET-ONLINE-USERS'

// возможно будет ошибка если экшен не подходит потому что reducer устанавливает значение sideBar по переданным
// в него данным dialogsPage
const sidebarReducer = (state, action) => {
	if (action.type === GET_ONLINE_USERS) {
		const onlineList = state.filter(dialog => dialog.online)
		return onlineList
	}
	return state
}

export const getOnlineListCreator = () => ({type: GET_ONLINE_USERS})

// export default sidebarReducer