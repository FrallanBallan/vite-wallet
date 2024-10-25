import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const LoginForm = () => {
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [logUsername, setLogUsername] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const { addUser, loginUser, loggedInUser } = useUserContext();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      username: regUsername,
      password: regPassword,
    };
    addUser(newUser);
    setRegPassword("");
    setLogUsername("");
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginUser(logUsername, logPassword);
    if (success) {
      alert("Login Successful!");
      setLogUsername("");
      setLogPassword("");
    } else {
      alert("Invalid username or password!");
    }
  };
  return (
    <>
      {/* Check if user is logged in, if not show forms */}
      {!loggedInUser ? (
        <>
          {/* Login Form */}
          <form onSubmit={handleLogin} className="flex flex-col">
            <h3>Login</h3>
            <input
              onChange={(e) => setLogUsername(e.target.value)}
              value={logUsername}
              type="text"
              placeholder="Username"
            />
            <input
              onChange={(e) => setLogPassword(e.target.value)}
              value={logPassword}
              type="password" // Use type password for security
              placeholder="Password"
            />
            <button className="bg-sky-200">Login</button>
          </form>

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="flex flex-col">
            <h3>Register</h3>
            <input
              onChange={(e) => setRegUsername(e.target.value)}
              value={regUsername}
              type="text"
              placeholder="Choose username"
            />
            <input
              onChange={(e) => setRegPassword(e.target.value)}
              value={regPassword}
              type="password" // Use type password for security
              placeholder="Choose password"
            />
            <button className="bg-sky-200">Register</button>
          </form>
        </>
      ) : (
        // Optionally, you can display a welcome message or user info when logged in
        <h1>Welcome back, {loggedInUser.username}!</h1>
      )}
    </>
  );
};

export default LoginForm;
