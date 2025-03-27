import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth-reducer';


const Header = () => {
  
  const { isAuth, login } = useSelector((state) => state.auth)

  // debugger
  const dispatch = useDispatch()

  const hendlerLogOut = () => {
    dispatch(logOut())
  }

  return (
    <header className={`${s.head} gitem`}>
      <div className={s.img_wrapp}>
      <img
        src='https://georgiaaddictiontreatmentcenter.com/wp-content/uploads/2024/11/DALL%C2%B7E-2024-11-13-02.49.10-An-abstract-colorful-depiction-of-the-brain-with-vibrant-swirling-patterns-symbolizing-altered-perception-and-consciousness.-The-brain-should-have-a.webp'
        alt="alt"
      />
      </div>
      <div className={s.loginBlock}>
        {isAuth ? (
          <div className={s.loginInner}>
            {/* {console.log('login', localStorage.getItem("authToken"))} */}
            {login}
            <div onDoubleClick={ hendlerLogOut } className={s.logOut}>Logout</div>
          </div>
          ) : <NavLink to={'/login'}>Login</NavLink>}
      </div>

    </header>
  );
};
export default Header;
