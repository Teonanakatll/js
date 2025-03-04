import s from "./Users.module.css"
import DialogItem from "../Dialogs/DialogItem/DialogItem"
import { useEffect } from "react"

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

	useEffect(() => {
		console.log('Сработала функция setUsersB');
		if (props.users.length === 0) {
			props.setUsersB([{id: 1, online: false, followed: true, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarys"}, photo:  "https://avatars.dzeninfra.ru/get-zen_doc/119173/pub_5c126713379cb200ad4a97e6_5c126c2b1371c600ab5edfcf/scale_1200"},
				{id: 2, online: true, followed: true, fullName: "Sasha", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}, photo: "https://masterpiecer-images.s3.yandex.net/7300c5d5725411eeabdb6ac6a1596643:upscaled"},
				{id: 3, online: false, followed: true, fullName: "Andrew", status: "I like do nothing", location: {city: "Kiev", country: "Ukraine"}, photo: "https://avatars.mds.yandex.net/get-shedevrum/16106905/img_010fdadaf14211ef82c4caf2840a7b5b/orig"},
				{id: 4, online: true, followed: false, fullName: "Nikolay", status: "Hi everyone !", location: {city: "New-York", country: "Usa"}, photo: "https://avatars.mds.yandex.net/get-shedevrum/10254163/img_0c2ff387f10b11ef805132129414c20c/orig"},
				{id: 5, online: true, followed: false, fullName: "Maksim", status: "Люблю лыжи", location: {city: "Ростов-на-Дону", country: "Russia"}, photo: "https://avatars.mds.yandex.net/get-shedevrum/14784426/img_348f4048f12811efa4f986c50544bce9/orig"}])
			
		}
		
	}, [props.users.length, props.setUsersB])
		

	return (
		<div>
			
			{props.users.map(u => <div key={u.id}>
				<span>
					<div className={s.avaWrap}>
						<DialogItem id={u.id} name={u.fullName} online={u.online} ava={u.photo} />
					</div>
					<div>
						
						{u.followed 
							? <button onClick={() => props.followB(u.id)}>Follow</button> 
							: <button onClick={() => props.unFollowB(u.id)}>Unfollow</button>}
						
					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)}
		</div>
	)
}
export default Users