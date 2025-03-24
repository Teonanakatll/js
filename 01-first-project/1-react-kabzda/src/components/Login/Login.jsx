import { login } from "../../redux/auth-reducer";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { LoginForm } from "../common/FormControl/FormControl";

// const LoginForm = () => {
	
// 	const dispatch = useDispatch()

// 	const validationSchema = Yup.object({
// 		email: Yup.string().email("Некорректный email").required("Обязательное поле"),
// 		password: Yup.string().min(4, 'Пароль должен быть не менее 4 символов').required("Обязательное поле")
// 	});

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       rememberMe: false,
//     },
// 		validationSchema,
//     onSubmit: (values) => {
//       // alert(JSON.stringify(values, null, 2));
// 			dispatch(login(values.email, values.password, values.rememberMe));
// 			formik.resetForm();
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div>
//         <input
//           name="email"
//           type="text"
// 					onBlur={formik.handleBlur}
//           onChange={formik.handleChange}
//           value={formik.values.email}
//           placeholder="Email"
//         />
// 				{formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}


//       </div>
//       <div>
//         <input
//           name="password"
//           type="password"
// 					onBlur={formik.handleBlur}
//           onChange={formik.handleChange}
//           value={formik.values.password}
//           placeholder="Password"
//         />
// 				{formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}
//       </div>
//       <div>
//         <input
//           name="rememberMe"
//           type="checkbox"
//           onChange={formik.handleChange}
//           checked={formik.values.rememberMe}
//         />
//         remember me
//       </div>
//       <div>
//         <button type="submit">Login</button>
//       </div>
//     </form>
//   );
// };

const Login = () => {

	const dispatch = useDispatch();
	const handleSubmit = useCallback((values) => {
		dispatch(login(values.email, values.password, values.rememberMe))
	})

  return (
    <div>
      <h1>Login</h1>
      <LoginForm handleSubmit={ handleSubmit } />
    </div>
  );
};
export default Login;
