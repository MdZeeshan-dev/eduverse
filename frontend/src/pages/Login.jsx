import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value) => {
    if (!value) {
      setEmailError('Email address is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError('Password is required');
      return false;
    }
    if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) return;

    setIsLoading(true);
    
    const userData = { email, password, role };
    console.log('Form Submitted with Role:', userData);
  };

  const isFormInvalid = 
    !email || 
    !password || 
    !!emailError || 
    !!passwordError || 
    isLoading;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-200 p-4 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border-2 border-slate-300">
        
        {/* Left Side Banner */}
        <div className="hidden md:flex md:w-5/12 bg-indigo-700 flex-col justify-between p-8 text-white">
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-widest uppercase bg-indigo-800 px-3 py-1 rounded-md">
              EduVerse Platform
            </span>
            <h1 className="text-4xl font-black tracking-tight mt-2">EduVerse</h1>
            <p className="text-sm text-indigo-100 leading-relaxed font-medium">
              India's premium tech-learning ecosystem. Access premium courses, live bootcamps, and industrial mentorship.
            </p>
          </div>

          <div className="pt-6 border-t border-indigo-600">
            <p className="text-xs text-indigo-200">Empowering future developers</p>
            <p className="text-lg font-bold text-white mt-0.5">100,000+ Learners</p>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-10 flex flex-col justify-center bg-white">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
            <p className="text-xs text-slate-500 mt-1">Please enter your credentials to log in.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Role Selection Container */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Login As
              </label>
              <div className="grid grid-cols-2 gap-2 bg-slate-200 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    role === 'student'
                      ? 'bg-white text-indigo-700 shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  👨‍🎓 Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole('instructor')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    role === 'instructor'
                      ? 'bg-white text-indigo-700 shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  👨‍🏫 Instructor
                </button>
              </div>
            </div>

            {/* Email Form Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full px-4 py-2.5 text-sm bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 placeholder:text-slate-400 font-medium transition-all ${
                  emailError ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="example@eduverse.com"
              />
              {emailError && (
                <p className="text-red-600 text-xs mt-1 font-medium">{emailError}</p>
              )}
            </div>

            {/* Password Form Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full px-4 py-2.5 text-sm bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 placeholder:text-slate-400 font-medium transition-all ${
                    passwordError ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              
              {passwordError && (
                <p className="text-red-600 text-xs mt-1 font-medium">{passwordError}</p>
              )}
            </div>

            {/* Remember Me and Password Recovery links */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-2 border-slate-300 rounded focus:ring-indigo-500 cursor-pointer"
                />
                <span className="ml-2 text-xs font-medium text-slate-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-xs font-bold text-indigo-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Form submission Trigger */}
            <button
              type="submit"
              disabled={isFormInvalid}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-bold shadow-md transition-all active:scale-[0.98] mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 hover:bg-indigo-700"
            >
              {isLoading ? 'Loading...' : 'Sign In'}
            </button>
          </form>

          {/* Account Creation Prompt */}
          <p className="text-xs text-center text-slate-500 mt-6">
            New to EduVerse?{' '}
            <Link to="/signup" className="text-indigo-600 hover:underline font-bold">
              Create account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
