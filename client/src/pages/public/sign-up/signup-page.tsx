import React from 'react';
import SignUpForm from '../../../components/signup-form/signup-form';
import styles from './signup-page.module.css';


const SignUpPage: React.FC = () => {
  return (
    <div className={styles.content}>
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage;
