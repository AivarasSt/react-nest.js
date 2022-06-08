import React from 'react';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
import styles from './LoginPage.module.css';

type InitialValues = {
  email: string
  password: string,
};

type FormikOnSubmit =
  (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => void | Promise<void>;


const Login: React.FC = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string()
      .required('Is required')
      .email('Is not valid email'),
    password: yup.string()
      .required('Is required'),
  });

  const onSubmit: FormikOnSubmit = async ({ email, password }) => {
    console.log(`Values: ${email}, ${password}`)
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.center}>
        <label htmlFor="email">Email</label>
        <div>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            autoComplete="email"
            autoFocus
            required
          />
          {touched.email && Boolean(errors.email) && <span className={styles.error}>{errors.email}</span>}
        </div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            required
          />
          {touched.password && Boolean(errors.password) && <span className={styles.error}>{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default Login;
