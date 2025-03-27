import { createSlice } from "@reduxjs/toolkit"
import { authAPI, loginAPI } from "../api/api"
import { setAuthUserData, noAuthUserData } from "./auth-reducer"
import { createAsyncThunk } from "@reduxjs/toolkit"

const appSlice = createSlice({
	// name: 'usersPage' означает, что все action types будут иметь префикс usersPage/ , addPost будет иметь тип profile/addPost
	name: 'appInit',
	initialState: {
		initialized: false,
		isLoading: false,
    error: null
	},
	reducers: {
		initializedSuccess: (state) => {
			// console.log('initializedSuccess');
			state.initialized = true
		},
	},
	extraReducers: (builder) => {
    builder
      .addCase(initializeApp.pending, (state) => {
				// console.log('pending');
        state.isLoading = true;
        state.error = null;
      })
      .addCase(initializeApp.fulfilled, (state) => {
				// console.log('fulfilled');
				// state.initialized = true;
        state.isLoading = false;
        // state.userData = action.payload;
      })
      .addCase(initializeApp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
})

// проверка токена
// export const initializeApp = () => async (dispatch) => {
//   const token = localStorage.getItem("authToken"); // или из cookies
// 	// debugger
//   if (token) {
//     try {
//       const auth = await authAPI.auth(); // Проверяем токен
//       if (auth.resultCode === 0) {
//         dispatch(setAuthUserData(auth.data));
// 				return auth.data
//       } else {
//         dispatch(noAuthUserData()); // Если токен невалидный
//       }
//     } catch (error) {
//       console.error("Auth check failed:", error);
//       dispatch(noAuthUserData());
//     }
//   }
// };

export const initializeApp = createAsyncThunk(
  'appInit/initialize',
	async (_, { dispatch, rejectWithValue }) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
			return rejectWithValue('No token found');
    }
		
    try {
			const auth = await authAPI.auth();
			// debugger
      
      if (auth.resultCode === 0) {
        dispatch(setAuthUserData(auth.data));
        return auth.data; // будет доступно в action.payload
      } else {
				// console.log('error', auth.messages[0]);
				dispatch(noAuthUserData());
        return rejectWithValue(auth.messages[0] || 'Authorization failed');
      }
    } catch (error) {
      dispatch(noAuthUserData());
      return rejectWithValue(error.message);
    }
  }
);

export const { initializedSuccess } = appSlice.actions
export default appSlice.reducer