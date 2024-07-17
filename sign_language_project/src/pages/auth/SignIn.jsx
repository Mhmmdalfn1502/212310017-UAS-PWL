import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/signin", { email, password });
      if (response && response.data) {
        login(response.data); // Simpan data user di context dan localStorage
        console.log("Login successful:", response.data); // Debug log
        if (response.data.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        alert("Login failed: No response data");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("Login failed: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signin grid grid-cols-1 lg:grid lg:grid-cols-2 bg-LightPurple">
      <div className="form flex px-4 justify-center items-center h-60 min-h-screen bg-gradient-to-br from-Primary to-orange-200">
        <div className="bg-LightPurple p-8 rounded-3xl shadow-md w-full max-w-md ">
          <form className="" onSubmit={handleSignin}>
            <div className="text-start mb-8">
              <div className="flex flex-col gap-4 mb-6">
                <span className="bg-gradient-to-br from-LightPrimary to-orange-200 bg-clip-text text-transparent text-4xl font-bold h-12">SignIn</span>
                <span className="text-Grey text-md font-medium">
                  Hallo, <b className="text-Black">Welcome back!</b>
                </span>
              </div>
              <span className="font-medium text-Grey">Don't have an account yet? </span>
              <a href="/signup" className="font-bold text-LightPrimary">SignUp</a>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium" htmlFor="email">
                Email
              </label>
              <input
                value={email}
                type="email"
                id="email"
                name="email"
                className="mt-2 p-2 w-full border rounded"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                value={password}
                type="password"
                id="password"
                name="password"
                className="mt-2 p-2 w-full border rounded"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bg-LightPrimary font-medium text-white p-2 rounded-xl w-full" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-LightPurple flex flex-col gap-6 items-center justify-center">
        <span className="font-bold text-1xl lg:text-2xl text-LightPrimary">Access on any device</span>
        <span className="font-bold text-xl lg:text-4xl text-LightPrimary">Deaf Language Expert</span>
        <span className="font-bold text-2xl lg:text-5xl text-Primary">Highly Rated Courses</span>
        <span className="font-bold text-xl lg:text-4xl text-LightPrimary">Access on any device</span>
        <span className="font-bold text-1xl lg:text-2xl text-LightPrimary">Deaf Language Expert</span>
      </div>
    </div>
  );
};

export default SignIn;
