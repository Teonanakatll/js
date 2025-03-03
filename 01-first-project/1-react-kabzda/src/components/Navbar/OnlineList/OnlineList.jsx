import s from '../Navbar.module.css'
import DialogItem from '../../Dialogs/DialogItem/DialogItem'

import { useDispatch, useSelector } from 'react-redux'
import { getOnlineUsers } from '../../../redux/sidebar-reducer'
import { useEffect } from 'react'

const OnlineList = () => {
	const dispatch = useDispatch()
	const dialogs = useSelector(state => state.dialogsPage.dialogs)
	const onlineList = useSelector((state) => state.navBar.sideBar)
	
	useEffect(() => {
		dispatch(getOnlineUsers(dialogs))
	}, [dispatch])
	
	const list = onlineList.map(el => <DialogItem id={el.id} name={el.name} ava={el.ava} online={el.online} onlineSection={true} />)

	return (
		<div className={s.onlineBox}>
			<span>Online:</span> 
		<div className={s.onlineWrap} >
			{list}
		</div>
		</div>
	)
}
export default OnlineList