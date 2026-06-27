import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log({
      
      role,
      email,
      password,
    });

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT */}

        <div className="hidden md:flex bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white p-12 flex-col justify-between">

          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
              EduVerse
            </span>

            <h1 className="text-5xl font-bold leading-tight mt-8">
              Welcome
              <br />
              Back 👋
            </h1>

            <p className="mt-6 text-blue-100 leading-7">
              Learn from industry experts with premium
              courses, projects and mentorship.
            </p>

          </div>

          {/* IMAGE */}

          <div className="flex justify-center">

            <div className="w-72 h-72 rounded-3xl border border-white/20 bg-white/10 flex items-center justify-center">

              <span className="text-white/70">
                Image Here
              </span>

            </div>

          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-white/10 backdrop-blur p-4">

              <h3 className="text-2xl font-bold">
                100K+
              </h3>

              <p className="text-sm text-blue-100">
                Students
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur p-4">

              <h3 className="text-2xl font-bold">
                500+
              </h3>

              <p className="text-sm text-blue-100">
                Courses
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur p-4">

              <h3 className="text-2xl font-bold">
                4.9★
              </h3>

              <p className="text-sm text-blue-100">
                Rating
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="p-8 md:p-12 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Sign In
          </h2>

          <p className="text-slate-500 mt-2 mb-8">
            Login to continue your learning journey.
          </p>

          {/* ROLE */}

          <div className="bg-slate-100 rounded-xl p-1 flex mb-6">

            <button
              type="button"
              onClick={() => setRole("student")}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                role === "student"
                  ? "bg-white text-blue-700 shadow"
                  : "text-slate-600"
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() => setRole("instructor")}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                role === "instructor"
                  ? "bg-white text-blue-700 shadow"
                  : "text-slate-600"
              }`}
            >
              Instructor
            </button>

          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>

              <label className="block mb-2 font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                required
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium text-slate-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

              </div>

            </div>
                        <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm text-slate-600">

                <input
                  type="checkbox"
                  className="accent-blue-600"
                />

                Remember me

              </label>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </form>

          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-px bg-slate-300"></div>

            <span className="text-sm text-slate-400">
              OR
            </span>

            <div className="flex-1 h-px bg-slate-300"></div>

          </div>

          <button
            type="button"
            className="w-full border border-slate-300 py-3 rounded-xl font-medium hover:bg-slate-50 transition"
          >
            Continue with Google
          </button>

          <p className="text-center text-sm text-slate-600 mt-8">

            Don't have an account?{" "}

            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;



