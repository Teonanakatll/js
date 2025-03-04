import "./Users.module.css"
import Users from "./Users"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { follow, unFollow, setUsers } from "../../redux/users-reducer"

const UsersContainer = () => {

	const users = useSelector((state) => state.usersPage.users)

	const dispatch = useDispatch()

	const followB = useCallback((userId) => {
		dispatch(follow(userId))
	}, [dispatch])

	// const followB = (userId) => {
	// 	dispatch(follow(userId))
	// }

	const unFollowB = useCallback((userId) => {
		dispatch(unFollow(userId))
	}, [dispatch])

	// const unFollowB = (userId) => {
	// 	dispatch(unFollow(userId))
	// }

	// const setUsersB = useCallback((users) => {
	// 	dispatch(setUsers(users))
	// }, [dispatch])

	const setUsersB = (users) => {
	dispatch(setUsers(users))
	}
	
	const userProps = {
		users,
		followB,
		unFollowB,
		setUsersB
	}

	return (
		<Users { ...userProps } />
	)
}
export default UsersContainer