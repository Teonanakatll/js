import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import OnlineList from './OnlineList/OnlineList'



const Navbar = () => {


	return (
		<div className={`${s.navBarSection} gitem`}>
			<nav className={`${s.nav}`}>
				<div className={`${s.item}`}>
					{/* isActive — это параметр, который передается в функцию className компонентом NavLink из библиотеки React Router. Он автоматически 
					добавляется в функцию, которая определяет, является ли текущий путь активным (т.е. соответствует ли он маршруту, на который ведет NavLink).
					s.navItem - просто показывает что через интерполяцию можно добавить несколько классов */}
					<NavLink to="/profile" className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem}>Profile</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to="/dialogs" className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem}>Messages</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to="/news" className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem}>News</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to="/music" className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem}>Music</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to="/settings" className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem}>Settings</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to="/users" className={({isActive}) => isActive ? `${s.active} ${s.navItem}` : s.navItem}>Users</NavLink>
				</div>

			</nav>
			{/* элементы в OnlineList имеют отличие в стилях поэтому передаём пропс с флагом */}
			<OnlineList />

		</div>
	)
}
export default Navbar