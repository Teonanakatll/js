import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
	// name: 'usersPage' означает, что все action types будут иметь префикс usersPage/ , addPost будет иметь тип profile/addPost
	name: 'usersPage',
	initialState: {
		users: [],
		pageSize: 50,
		totalUsersCount: 0,
		currentPage: 1
	},
	//                                        ФУНКЦИЯ ТОГГЛ
	reducers: {
		follow: (state, action) => {
			// console.log("Follow action payload:", action.payload, )

			const user = state.users.find(user => user.id === action.payload)
			if (user) {
				user.followed = !user.followed
			}
		},
		setUsers: (state, action) => {
			state.users = action.payload
		},
		unFollow: (state, action) => {
			// console.log("UnFollow action payload:", action.payload)
			const user = state.users.find(user => user.id === action.payload)
			if (user) {
				user.followed = !user.followed
			}
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},
		setTotalUsersCount: (state, action) => {
			state.totalUsersCount = action.payload
		},
	}
})

export const { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount } = usersSlice.actions
export default usersSlice.reducer