import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
//styles
import styles from "./Signup.module.css";
// import {useNavigate} from "react-router-dom"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, displayName, password);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>Email</span>
        <input onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>

      <label>
        <span>ID</span>
        <input
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
