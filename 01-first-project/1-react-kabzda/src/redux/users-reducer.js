import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
	// name: 'usersPage' означает, что все action types будут иметь префикс usersPage/ , addPost будет иметь тип profile/addPost
	name: 'usersPage',
	initialState: {
		users: [

		]
	},
	//                                        ФУНКЦИЯ ТОГГЛ
	reducers: {
		follow: (state, action) => {
			// console.log("Follow action payload:", action.payload, )

			const user = state.users.find(user => user.id === action.payload)
			if (user) {
				user.followed = !user.followed
			}

			// return {
			// 	...state,
			// 	users: state.users.map(u => {
			// 		if (u.id === action.payload) {
			// 			console.log("Follow value:", u.followed)
			// 			return {...u, followed: true}
			// 		}
			// 		return u
			// 	})
			// }
			
		},
		setUsers: (state, action) => {
			// state.users = action.payload

			return { ...state, users: [...state.users, ...action.payload] }
		},
		unFollow: (state, action) => {
			// console.log("UnFollow action payload:", action.payload)
			const user = state.users.find(user => user.id === action.payload)
			if (user) {
				user.followed = !user.followed
			}

			// return {
			// 	...state,
			// 	users: state.users.map(u => {
			// 		if (u.id === action.payload) {
			// 			return {...u, followed: false}
			// 		}
			// 		return u
			// 	})
			// }

		}
	}
})

export const { follow, unFollow, setUsers } = usersSlice.actions
export default usersSlice.reducer