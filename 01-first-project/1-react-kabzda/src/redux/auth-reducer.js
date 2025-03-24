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
	}
})

export const authMe = () => async (dispatch) => {
	const auth = await authAPI.auth()
    // debugger
		if (auth.resultCode === 0) {
			dispatch(setAuthUserData(auth.data))
			
		}
	}

// проверка токена
export const initializeApp = () => async (dispatch) => {
  const token = localStorage.getItem("token"); // или из cookies
  if (token) {
    try {
      const auth = await authAPI.auth(); // Проверяем токен
      if (auth.resultCode === 0) {
        dispatch(setAuthUserData(auth.data));
      } else {
        dispatch(noAuthUserData()); // Если токен невалидный
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      dispatch(noAuthUserData());
    }
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
	const auth = await loginAPI.login(email, password, rememberMe)
	// debugger
	if (auth.resultCode === 0) {
			dispatch(authMe())
			localStorage.setItem("isAuth", "true")
			localStorage.setItem("authToken", auth.data.token)
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

export const { setAuthUserData, noAuthUserData } = authUserSlice.actions
export default authUserSlice.reducer