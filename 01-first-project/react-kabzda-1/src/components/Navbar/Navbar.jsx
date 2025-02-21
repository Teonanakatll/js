import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className={`${s.nav} gitem`}>
		<div className={`${s.item}`}>
			{/* isActive — это параметр, который передается в функцию className компонентом NavLink из библиотеки React Router. Он автоматически 
			добавляется в функцию, которая определяет, является ли текущий путь активным (т.е. соответствует ли он маршруту, на который ведет NavLink).
			s.navItem - просто показывает что через интерполяцию можно добавить несколько классов */}
			<NavLink className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem} to="/profile">Profile</NavLink>
		</div>
		<div className={s.item}>
			<NavLink className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem} to="/dialogs">Messages</NavLink>
		</div>
		<div className={s.item}>
			<NavLink className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem} to="/news">News</NavLink>
		</div>
		<div className={s.item}>
			<NavLink className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem} to="/music">Music</NavLink>
		</div>
		<div className={s.item}>
			<NavLink className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem} to="/settings">Settings</NavLink>
		</div>
	</nav>
	)
}
export default Navbar