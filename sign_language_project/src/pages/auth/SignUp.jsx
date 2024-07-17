import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        username,
        email,
        password
      });
      console.log(response.data);
      alert(response.data.message);
      navigate('/signin');
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
        alert(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        alert("No response from server. Please try again later.");
      } else {
        console.log('Error', error.message);
        alert(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup grid grid-cols-1 lg:grid lg:grid-cols-2 bg-LightPurple">
      <div className="form flex px-4 justify-center items-center h-60 min-h-screen bg-gradient-to-br from-Primary to-orange-200">
        <div className="bg-LightPurple p-8 rounded-3xl shadow-md w-full max-w-md ">
          <form onSubmit={handleSubmit} className="">
            <div className="text-start mb-8">
              <div className="flex flex-col gap-4 mb-6">
                <span className="bg-gradient-to-br from-LightPrimary to-orange-200 bg-clip-text text-transparent text-4xl font-bold h-12">SignUp</span>
                <span className="text-Grey text-md font-medium">
                  Hallo, <b className="text-Black">Welcome</b>
                </span>
              </div>
              <span className="font-medium text-Grey">Already have an account? </span>
              <a href="/signin" className="font-bold text-LightPrimary">SignIn</a>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-2 p-2 w-full border rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-2 w-full border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-2 p-2 w-full border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="bg-LightPrimary font-medium text-white p-2 rounded-xl w-full" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-LightPurple flex flex-col gap-6 items-center justify-center ">
        <span className="font-bold text-1xl lg:text-2xl text-LightPrimary">Access on any device</span>
        <span className="font-bold text-xl lg:text-4xl text-LightPrimary">Deaf Language Expert</span>
        <span className="font-bold text-2xl lg:text-5xl text-Primary">Highly Rated Courses</span>
        <span className="font-bold text-xl lg:text-4xl text-LightPrimary">Access on any device</span>
        <span className="font-bold text-1xl lg:text-2xl text-LightPrimary">Deaf Language Expert</span>
      </div>
    </div>
  );
};

export default SignUp;
