import { useFormik } from "formik";
import { login } from "../../redux/auth-reducer";
import { useDispatch } from "react-redux";

const LoginForm = () => {
	
	const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
			dispatch(login(values.email, values.password, values.rememberMe))
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name="email"
          type="text"
					onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
					onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
      </div>
      <div>
        <input
          name="rememberMe"
          type="checkbox"
          onChange={formik.handleChange}
          checked={formik.values.rememberMe}
        />
        remember me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};
export default Login;
