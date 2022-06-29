import React from 'react';
import LoginForm from '../../../components/login-form/login-form';
import styles from './login-page.module.css';


const LoginPage: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1>Log In</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage