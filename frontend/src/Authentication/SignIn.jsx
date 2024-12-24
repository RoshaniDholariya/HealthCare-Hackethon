import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        formData
      );
      console.log("User signed in:", response.data);
      localStorage.setItem("authToken", response.data.token);

      alert("Login successful!");
      window.location.href = "/patientform";
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/path/to/your/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md bg-white p-8 shadow-xl rounded-3xl backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Sign In
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Welcome back! Let’s continue with,
        </p>

        <div className="flex gap-4 mt-6">
<<<<<<< HEAD
          <button className="flex items-center justify-center w-full px-4 py-3 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
              className="w-20 h-6"
            />
          </button>
        </div>
=======
           <a href="/googlelogin"> <button className="flex items-center justify-center w-full px-4 py-3 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Google"
                className="w-20 h-6"
              />
            </button>
            </a>
          </div>
>>>>>>> b0d03a11e3d9c2a052f63643e150566e44095f09

        <div className="flex items-center my-6">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="mx-4 text-gray-500">or Sign in with</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </div>

        {error && <div className="text-red-500 text-center my-2">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm text-gray-600">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600">Your Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-5 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-orange-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-orange-600 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
