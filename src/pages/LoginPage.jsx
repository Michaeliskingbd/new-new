import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrormessage] = useState(false);

  const navigate = useNavigate();

  async function login() {
    try {
      const response = await axios.post("https://dummyjson.com/user/login", {
        username,
        password,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);

      console.log(response.data);
    } catch (error) {
      console.log("Error", error);
      setErrormessage(true);
    }
  }
  return (
    <section className="p-[200px] flex flex-col gap-3">
      <input
        className="h-12 border-2 border-emerald-300 px-2 w-[200px] outline-none"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="h-12 border-2 border-emerald-300 px-2 w-[200px] outline-none"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      {errorMessage && (
        <p className="text-red-500">Incorrect Password or Username</p>
      )}
    </section>
  );
};

export default LoginPage;
