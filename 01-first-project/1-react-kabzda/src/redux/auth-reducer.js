import { createSlice } from "@reduxjs/toolkit"
import { authAPI, loginAPI } from "../api/api"

const authUserSlice = createSlice({
	// name: 'usersPage' означает, что все action types будут иметь префикс usersPage/ , addPost будет иметь тип profile/addPost
	name: 'authUser',
	initialState: {
		id: null,
		email: null,
		login: null,
		isAuth: localStorage.getItem("isAuth") === "true",
		// isAuth: false,
		error: null
	},
	reducers: {
		setAuthUserData: (state, action) => {
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
		authError: (state, action) => {
			state.error = action.payload
		},
		clearError: (state) => {
			state.error = null
		}
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
	// debugger
	if (auth.resultCode === 0) {
			dispatch(authMe())
			dispatch(clearError())
			localStorage.setItem("isAuth", "true")
			localStorage.setItem("authToken", auth.data.token)
		} else {
			dispatch(authError(auth.messages[0]))
			// console.log('auth.messages', auth.messages[0]);
		}
	}

export const logOut = () => async (dispatch) => {
	const auth = await loginAPI.logOut()

		if (auth.resultCode === 0) {
			dispatch(noAuthUserData())
			localStorage.removeItem("isAuth")
			localStorage.removeItem("authToken")
		}
	}

export const { setAuthUserData, noAuthUserData, authError, clearError } = authUserSlice.actions
export default authUserSlice.reducer