import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import Navbar from "../components/Navbar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
      confirmPassword,
      agree,
    });
  };

  return (
    <>
      <Navbar authPage={true} />

      <main className="h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">

        <div className="w-full max-w-3xl -translate-y-6 bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left Side */}

            <div className="hidden lg:flex flex-col items-center justify-center bg-blue-50 p-8">

              <img
                src="https://placehold.co/280x280"
                alt="Signup Illustration"
                className="w-52 mb-6"
              />

              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                Join EduVerse 🚀
              </h2>

              <p className="text-center text-gray-600 leading-7">
                Create your account and start your learning journey today.
              </p>

            </div>

            {/* Right Side */}

            <div className="flex items-center justify-center p-8">

              <div className="w-full max-w-sm">

                <h1 className="text-3xl font-bold text-gray-900">
                  Create Account
                </h1>

                <p className="text-gray-500 mt-2 mb-6">
                  Create your EduVerse account.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* Full Name */}

                  <div>

                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>

                    <div className="relative">

                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />

                    </div>

                  </div>

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
                        placeholder="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>

                    </div>

                  </div>