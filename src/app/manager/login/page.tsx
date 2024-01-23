'use client'
import { useState } from 'react';
import styles from './login.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { fireAuth } from '@/firebase/base';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser =()=>{
    signInWithEmailAndPassword(fireAuth, email, password)
    .then((user)=>{
      if(user){
        router.push('/manager');
      }else{
        prompt('Invalid credentials');
      }
    })
  }

  return ( 
    <section className={styles.formBox}>
    <form className={styles.loginForm} onSubmit={(e)=>{e.preventDefault(); loginUser()}}>
      <div>
        <span>Email</span>
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email} required />
      </div>
      <div>
        <span>Password</span>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} required />
      </div>
      <button>Login</button>
    </form>
    </section>
   );
}
 
export default Login;