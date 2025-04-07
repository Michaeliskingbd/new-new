import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrormessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Spinner control

  const navigate = useNavigate();

  async function login() {
    setIsLoading(true);
    try {
      const response = await axios.post("https://dummyjson.com/user/login", {
        username,
        password,
      });

      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 2000);

      console.log(response.data);
    } catch (error) {
      console.log("Error", error);
      setIsLoading(false);
      setErrormessage(true);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-white to-emerald-100">
      <div className="bg-white shadow-lg rounded-lg p-10 w-[350px] sm:w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-emerald-600">
          Welcome Back 👋
        </h2>

        <div className="flex flex-col gap-5">
          <input
            className="h-12 border border-gray-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-emerald-400 transition"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="h-12 border border-gray-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-emerald-400 transition"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            disabled={isLoading}
            className={`h-12 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-md transition duration-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">
              Incorrect Password or Username
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
