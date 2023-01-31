import React, { useState } from "react";
import { auth } from "./firebase";
import "./Auth.scss";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any>(null);
  const [active, setActive] = useState(false);
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error);
    }
  };
  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="auth">
      {active ? (
        <form className="auth-form" onSubmit={handleSignUp}>
          <input type="email" placeholder="Email id" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">SignUp</button>
          <div onClick={() => setActive(!active)} className="activeBtn">
            Already user LogIn
          </div>
        </form>
      ) : (
        <form className="auth-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email id" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
          <div onClick={() => setActive(!active)} className="activeBtn">
            Don't have account signUp
          </div>
        </form>
      )}

      {error && <p className="auth-error">{error.message}</p>}
    </div>
  );
};

export default Auth;
