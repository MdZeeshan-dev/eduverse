import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import Navbar from "../components/common/Navbar";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

     <main className="h-[calc(100dvh-64px)] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}

            <div className="hidden lg:flex flex-col items-center justify-center bg-blue-50 p-6">
              <img
                src="https://placehold.co/280x280"
                alt="Signup Illustration"
                className="w-40 mb-4"
              />

              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                Join EduVerse 🚀
              </h2>

              <p className="text-center text-gray-600 leading-6 text-sm">
                Create your account and start your learning journey today.
              </p>
            </div>

            {/* Right Side */}

            <div className="flex items-center justify-center p-6">
              <div className="w-full max-w-sm">
                <h1 className="text-3xl font-bold text-gray-900">
                  Signup
                </h1>

                <p className="text-gray-500 mt-1 mb-4 text-sm">
                  Create your EduVerse account.
                </p>

                <form onSubmit={handleSubmit} className="space-y-2">
                  {/* Full Name */}

                  <div>
                    <label className="block text-sm font-medium mb-1">
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
                        className="w-full rounded-xl border border-gray-300 py-2.5 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  {/* Email */}

                  <div>
                    <label className="block text-sm font-medium mb-1">
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
                        className="w-full rounded-xl border border-gray-300 py-2.5 pl-11 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>

                  {/* Password */}

                  <div>
                    <label className="block text-sm font-medium mb-1">
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
                        className="w-full rounded-xl border border-gray-300 py-2.5 pl-11 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
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

                  {/* Confirm Password */}

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Confirm Password
                    </label>

                    <div className="relative">
                      <Lock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 py-2.5 pl-11 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Terms */}

                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={() => setAgree(!agree)}
                      className="accent-blue-600"
                    />
                    I agree to the Terms & Conditions
                  </label>

                  {/* Button */}

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Create Account
                  </button>

                  {/* Divider */}

                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-300"></div>

                    <span className="text-sm text-gray-500">OR</span>

                    <div className="h-px flex-1 bg-gray-300"></div>
                  </div>

                  {/* Google */}

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-2.5 font-medium transition hover:bg-gray-50"
                  >
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="h-5 w-5"
                    />
                    Continue with Google
                  </button>

                  {/* Bottom */}

                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
