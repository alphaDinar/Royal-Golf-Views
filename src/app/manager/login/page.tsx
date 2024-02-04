'use client'
import { useState } from 'react';
import styles from './login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { fireAuth } from '@/firebase/base';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    console.log('started');
    signInWithEmailAndPassword(fireAuth, email, password)
      .then((user) => {
        if (user) {
          router.push('/manager');
        } else {
          prompt('Invalid credentials');
        }
      })
  }

  return (
    <section className={styles.formBox}>
      <Image
        alt='golf'
        src={'https://res.cloudinary.com/dvnemzw0z/image/upload/v1705012545/RGV/rgvLoader_yutywg.png'}
        height={100}
        width={100}
      />
      <form className={styles.loginForm} onSubmit={(e) => { e.preventDefault(); loginUser() }}>
        <div>
          <span>Email</span>
          <input type="text" onChange={(e) => { setEmail(e.target.value) }} value={email} required />
        </div>
        <div>
          <span>Password</span>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} required />
        </div>
        <button>Login</button>
      </form>
    </section>
  );
}

export default Login;