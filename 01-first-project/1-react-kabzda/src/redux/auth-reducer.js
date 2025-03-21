import { createSlice } from "@reduxjs/toolkit"
import { authAPI } from "../api/api"

const authUserSlice = createSlice({
	// name: 'usersPage' означает, что все action types будут иметь префикс usersPage/ , addPost будет иметь тип profile/addPost
	name: 'authUser',
	initialState: {
		data: {
			id: null,
			email: null,
			login: null,
			isAuth: true,
		},
		isFetching: false,
	},

	reducers: {
		setAuthUserData: (state, action) => {
			// console.log("Follow action payload:", action.payload, )
			state.data.id = action.payload.id
			state.data.email = action.payload.email
			state.data.login = action.payload.login
			state.data.isAuth = true
		},

	}
})

export const authMe = () => async (dispatch) => {
	const auth = await authAPI.auth()

		if (auth.resultCode === 0) {
			dispatch(setAuthUserData(auth.data))
		}
	}

export const { setAuthUserData } = authUserSlice.actions
export default authUserSlice.reducer