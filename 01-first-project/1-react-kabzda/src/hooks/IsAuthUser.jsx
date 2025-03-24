import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const IsAuthUser = ({ children }) => {
	const isAuth = useSelector((store) => store.auth.isAuth)
	// if (!isAuth && !token) {
	// 	return <Navigate to="/login" replace />
	// }
	// if (token && !isAuth) {
	// 	return <div>Loading...</div>
	// }
	return isAuth ? children : <Navigate to="/login" replace />
}

export default IsAuthUser