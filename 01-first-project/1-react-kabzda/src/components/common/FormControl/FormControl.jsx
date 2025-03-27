import { useFormik } from "formik";
import { useSelector } from "react-redux";
import s from "./FormControl.module.css";
import * as Yup from "yup";


export const LoginForm = (props) => {

	const authError = useSelector((store) => store.auth.error)

	const validationSchema = Yup.object({
		email: Yup.string().email("Некорректный email").required("Обязательное поле"),
		password: Yup.string().min(4, 'Пароль должен быть не менее 4 символов').required("Обязательное поле")
	});

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
		validationSchema,
    onSubmit: (values) => {

			props.handleSubmit(values);
			formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
			{authError && <div style={{color: 'red'}}>{authError}</div>}
      <div>
        <input
          name="email"
          type="text"
					onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
        />
				{formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}


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
				{formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}
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

export const Textarea = (props) => {
	const validationSchema = Yup.object({
		post: Yup.string()
			.trim()  // Удаляет пробелы в начале и конце строки. Не изменяет пробелы между словами.
			.required("Поле не должно быть пустым")
	})

  const formik = useFormik({
    initialValues: { post: ""},
		validationSchema,
    onSubmit: (values) => {
			props.handleSubmit(values.post);
      formik.resetForm();
    },
  });

	const hasError = formik.errors.post

  return (
    <form onSubmit={ formik.handleSubmit }>
      <div>
        <p>{ formik.values.post }</p>
        <textarea
					className={ hasError ? `${s.error} ${s.formControl}` : s.formControl}
          name="post"
          type="text"
          placeholder="Введите текст поста"
          onChange={ formik.handleChange }
          value={ formik.values.post }
        />
				{hasError && <span style={{color: "red"}}>{formik.errors.post}</span>}
      </div>
      <div>
        {/* Callback функция — это функция, которая передается в другую функцию как аргумент и вызывается
        в определенный момент, например, по завершении какой-либо операции или события. */}
        <button type="submit">Add post</button>
      </div>
    </form>
  );
};