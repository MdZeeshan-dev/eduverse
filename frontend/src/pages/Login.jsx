import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log({
      email,
      password,
      role,
    });

    setTimeout(() => {
      setLoading(false);
      // later
      // navigate("/dashboard")
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left */}
        <div className="hidden md:flex md:w-5/12 bg-indigo-700 text-white p-10 flex-col justify-between">
          <div>
            <span className="bg-indigo-800 px-3 py-1 rounded-md text-xs font-semibold">
              EduVerse
            </span>

            <h1 className="text-5xl font-bold mt-5">Welcome Back</h1>

            <p className="mt-4 text-indigo-100 leading-7">
              Continue your learning journey with India's modern online learning
              platform.
            </p>
          </div>

          {/* Image yaha baad me add karna */}

          <div>
            <p className="text-indigo-200 text-sm">Trusted by</p>

            <h2 className="text-3xl font-bold">100,000+ Learners</h2>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-7/12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900">Sign In</h2>

          <p className="text-slate-500 mt-2 mb-8">
            Login to access your account.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Role */}

            <div>
              <label className="text-sm font-medium text-slate-600">
                Login As
              </label>

              <div className="grid grid-cols-2 gap-2 bg-slate-100 rounded-xl p-1 mt-2">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`py-2 rounded-lg font-medium transition ${
                    role === "student"
                      ? "bg-white shadow text-indigo-700"
                      : "text-slate-600"
                  }`}
                >
                  Student
                </button>

                <button
                  type="button"
                  onClick={() => setRole("instructor")}
                  className={`py-2 rounded-lg font-medium transition ${
                    role === "instructor"
                      ? "bg-white shadow text-indigo-700"
                      : "text-slate-600"
                  }`}
                >
                  Instructor
                </button>
              </div>
            </div>

            {/* Email */}

            <div>
              <label className="text-sm font-medium text-slate-600">
                Email
              </label>

              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Password */}

            <div>
              <label className="text-sm font-medium text-slate-600">
                Password
              </label>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember */}

            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password" className="text-indigo-600 text-sm">
                Forgot Password?
              </Link>
            </div>

            {/* Button */}

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-slate-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-600 font-semibold">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
