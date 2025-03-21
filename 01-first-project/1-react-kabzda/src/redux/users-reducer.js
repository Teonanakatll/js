import { createSlice } from "@reduxjs/toolkit"

import { usersAPI } from "../api/api"

const usersSlice = createSlice({
	// name: 'usersPage' означает, что все action types будут иметь префикс usersPage/ , addPost будет иметь тип profile/addPost
	name: 'usersPage',
	initialState: {
		users: [],
		pageSize: 50,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: [2, 3],
	},
	//                                        ФУНКЦИЯ ТОГГЛ
	reducers: {
		followSusses: (state, action) => {
			// console.log("Follow action payload:", action.payload, )

			const user = state.users.find(user => user.id === action.payload)
			if (user) {
				user.followed = !user.followed
			}
		},
		setUsers: (state, action) => {
			state.users = action.payload
		},
		unFollowSusses: (state, action) => {
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
		toggleIsFetching: (state, action) => {
			state.isFetching = action.payload
		},
    toggleFollowingProgress: (state, action) => {
      const { userId, isFetching } = action.payload;
      if (isFetching) {
        state.followingInProgress.push(userId); // Добавляем userId
      } else {
        state.followingInProgress = state.followingInProgress.filter(id => id !== userId); // Удаляем userId
      }
    },
	}
})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	// номер страницы при рендере берём из значения стейта page=${currentPage}
	const data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
	};

export const follow = (userId) => async (dispatch) => {
	dispatch(toggleFollowingProgress({userId: userId, isFetching: true}))
	const data = await usersAPI.follow(userId)
		if (data.resultCode === 0) {
		dispatch(followSusses(userId))
		}
		dispatch(toggleFollowingProgress({userId: userId, isFetching: false}))
	}

export const unFollow = (userId) => async (dispatch) => {
	dispatch(toggleFollowingProgress({userId: userId, isFetching: true}))
	const data = await usersAPI.unFollow(userId)
		if (data.resultCode === 0) {
		dispatch(unFollowSusses(userId))
		}
		dispatch(toggleFollowingProgress({userId: userId, isFetching: false}))
	}


export const { followSusses, unFollowSusses, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
	toggleFollowingProgress, 
 } = usersSlice.actions
export default usersSlice.reducer