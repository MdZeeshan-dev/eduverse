import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <>
      <Navbar authPage={true} />

      <main className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-8">

        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left Side */}

            <div className="hidden lg:flex flex-col items-center justify-center bg-blue-50 p-8">

              <img
                src="https://placehold.co/280x280"
                alt="Login Illustration"
                className="w-56 mb-6"
              />

              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Welcome Back 👋
              </h2>

              <p className="text-center text-gray-600 leading-7">
                Continue your learning journey with EduVerse and access all your
                courses from one place.
              </p>

            </div>

            {/* Right Side */}

            <div className="flex items-center justify-center p-8">

              <div className="w-full max-w-sm">

                <h1 className="text-3xl font-bold text-gray-900">
                  Login
                </h1>

                <p className="text-gray-500 mt-2 mb-8">
                  Welcome back! Please login to continue.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Email */}

                  <div>

                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>

                    <div className="relative">

                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />

                    </div>

                  </div>

                  {/* Password */}

                  <div>

                    <label className="block text-sm font-medium mb-2">
                      Password
                    </label>

                    <div className="relative">

                      <Lock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>

                    </div>

                  </div>