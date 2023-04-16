import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = async () => {
    if (!email || !password) return alert("Please enter email and password");
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/login");
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        console.log(error);
      });
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleSignup} disabled={loading}>
          Create Account
        </button>
        <button onClick={handleGoogleSignup}>Signup with Google</button>
        {error && <p>{error}</p>}
      </div>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};

export default Signup;
