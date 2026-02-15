import React, { useState } from "react";
import API from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await API.post("/users/login", { email, password });

      //Save the Token
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userRole",response.data.user.role);

      navigate("/dashboard");
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ message: string }>;

      const message =
        axiosError.response?.data?.message || "Something Went Wrong";
      setError(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-600">
          BookScout Login
        </h2>
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              placeholder="*******"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:transform active:scale-[0.98] transition-all shadow-md"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have and account?
          <span className="text-blue-600 cursor-pointer font-medium">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
