import React, {useState} from 'react'

//styles
import styles from './Signup.module.css'
// import {useNavigate} from "react-router-dom"



export default function Signup() {
const [email, setEmail] = useState('');
const [displayName, setDisplayName] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(
    email, displayName, password
  )
}

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>Email</span>
        <input
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
      </label>

      <label>
        <span>ID</span>
        <input
        onChange={(e)=>setDisplayName(e.target.value)}
        value={displayName}
        />
      </label>

      <label>
        <span>Password</span>
        <input
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        type="password"
        />
      </label>
      <button className='btn'>Signup</button>

    </form>

  )
}
