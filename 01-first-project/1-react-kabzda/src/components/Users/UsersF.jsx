import s from "./Users.module.css"
import DialogItem from "../Dialogs/DialogItem/DialogItem"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import orig from "../../assets/img/orig.webp"
import Preloader from "../common/Preloader/Preloader"
import { setCurrentPage } from "../../redux/users-reducer";
import { getUsers, follow , unFollow } from "../../redux/users-reducer"


const Users = (props) => {

	// const setUsers = () => {
	// 	console.log('Сработала функция setUsersB');
	// 	props.setUsersB([{id: 1, online: false, followed: true, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarys"}, photo:  "https://avatars.dzeninfra.ru/get-zen_doc/119173/pub_5c126713379cb200ad4a97e6_5c126c2b1371c600ab5edfcf/scale_1200"},
	// 		{id: 2, online: true, followed: true, fullName: "Sasha", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}, photo: "https://masterpiecer-images.s3.yandex.net/7300c5d5725411eeabdb6ac6a1596643:upscaled"},
	// 		{id: 3, online: false, followed: true, fullName: "Andrew", status: "I like do nothing", location: {city: "Kiev", country: "Ukraine"}, photo: "https://avatars.mds.yandex.net/get-shedevrum/16106905/img_010fdadaf14211ef82c4caf2840a7b5b/orig"},
	// 		{id: 4, online: true, followed: false, fullName: "Nikolay", status: "Hi everyone !", location: {city: "New-York", country: "Usa"}, photo: "https://avatars.mds.yandex.net/get-shedevrum/10254163/img_0c2ff387f10b11ef805132129414c20c/orig"},
	// 		{id: 5, online: true, followed: false, fullName: "Maksim", status: "Люблю лыжи", location: {city: "Ростов-на-Дону", country: "Russia"}, photo: "https://avatars.mds.yandex.net/get-shedevrum/14784426/img_348f4048f12811efa4f986c50544bce9/orig"}])
	// 	}
	// }

	const path = "profile"

	const users = useSelector((state) => state.usersPage.users);
	const pageSize = useSelector((state) => state.usersPage.pageSize);
	const totalUsersCount = useSelector((state) => state.usersPage.totalUsersCount);
	const currentPage = useSelector((state) => state.usersPage.currentPage);
	const isFetching = useSelector((state) => state.usersPage.isFetching);
	const followingInProgress = useSelector((state) => state.usersPage.followingInProgress)

	const dispatch = useDispatch()

	// const handleSetUsers = useCallback((users) => {
	// 	dispatch(setUsers(users))
	// }, [dispatch])

	// в момент клика передаётся номер запрашиваемой страницы, его и передаём в параметр page=${pageNumber}
	const onPageChange = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
	}

	useEffect(() => {
		// handleToggleIsFetching(true)
		// // номер страницы при рендере берём из значения стейта page=${currentPage}
		// usersAPI.getUsers(currentPage, pageSize).then(data => {
		// 	handleToggleIsFetching(false)
		// 	handleSetUsers(data.items)
		// 	handleTotalUsersCount(data.totalCount)
		// })
		dispatch(getUsers(currentPage, pageSize))
	}, [currentPage])
	
	const pagesCount = Math.ceil(totalUsersCount / pageSize)
	const pages = []
	for (let i=1; i <= pagesCount && pages.length < 10; i++) {
			pages.push(i)

	}
	// for (let i=pagesCount; i > 1 && pages.length < 10; i--) {
	// 		pages.push(i)
	// }

	return (
		<>
			{ isFetching ? <Preloader /> : null}

			<div>
				{pagesCount
				}
				<div className={s.pagWrap}>
					{pages.map(p => <div key={p} className={currentPage === p ? `${s.selectedPage} ${s.pagButton}` : s.pagButton}
					onClick={() => onPageChange(p)}>{p}</div>)}
				</div>
				
				{users.map(u => <div key={u.id}>       
					<span>
						<div className={s.avaWrap}>
							{/* {u.id} */}
							<DialogItem id={u.id} name={u.fullName} online={u.online} path={path} ava={u.photos.small ? u.photos.small : orig} />
						</div>
						<div>
							
							{u.followed 
								? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
									// handleToggleFollowingProgress({userId: u.id, isFetching: true})
									// usersAPI.unFollow(u.id)
									// .then(response => {
									// 	if (response.resultCode === 0) {
									// 		handleFollow(u.id)
									// 	}
									// 	handleToggleFollowingProgress({userId: u.id, isFetching: false})
									// })
									dispatch(unFollow(u.id))
								
								}}>Unfollow</button> 

								: <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
									// handleToggleFollowingProgress({userId: u.id, isFetching: true})
									// usersAPI.follow(u.id)
									// .then(response => {
									// 	if (response.resultCode === 0) {
									// 		handleUnfollow(u.id)
									// 	}
									// 	handleToggleFollowingProgress({userId: u.id, isFetching: false})
									// })
									dispatch(follow(u.id))
									
								}}>Follow</button>}
							
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
						</span>
					</span>
				</div>)}
			</div>
		</>
	)
}
export default Users