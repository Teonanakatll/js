import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const useAuth = () => {
	const isAuth = useSelector((store) => store.auth.isAuth)
	return isAuth
}

const IsAuthUser = ({ children }) => {
	const isAuth = useAuth();

	if (!isAuth) {
		return <Navigate to="/login" replace />
	}

	return children;
}

export default IsAuthUser