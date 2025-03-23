import { createSlice } from "@reduxjs/toolkit"
import { authAPI, loginAPI } from "../api/api"

const authUserSlice = createSlice({
	// name: 'usersPage' означает, что все action types будут иметь префикс usersPage/ , addPost будет иметь тип profile/addPost
	name: 'authUser',
	initialState: {
		id: null,
		email: null,
		login: null,
		isAuth: false,
	},
	reducers: {
		setAuthUserData: (state, action) => {
			// console.log("Follow action payload:", action.payload, )
			state.id = action.payload.id
			state.email = action.payload.email
			state.login = action.payload.login
			state.isAuth = true
		},
		noAuthUserData: (state) => {
			state.id = null
			state.email = null
			state.login = null
			state.isAuth = false
		},
	}
})

export const authMe = () => async (dispatch) => {
	const auth = await authAPI.auth()
    // debugger
		if (auth.resultCode === 0) {
			dispatch(setAuthUserData(auth.data))
		}
	}

export const login = (email, password, rememberMe) => async (dispatch) => {
	const auth = await loginAPI.login(email, password, rememberMe)

		if (auth.resultCode === 0) {
			dispatch(authMe())
		}
	}

export const logOut = () => async (dispatch) => {
	const auth = await loginAPI.logOut()

		if (auth.resultCode === 0) {
			dispatch(noAuthUserData())
		}
	}

export const { setAuthUserData, noAuthUserData } = authUserSlice.actions
export default authUserSlice.reducer