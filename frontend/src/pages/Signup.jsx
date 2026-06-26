import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (name.trim().length < 3) return setNameError('Name must be at least 3 characters');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setEmailError('Enter a valid email address');
    if (password.length < 8) return setPasswordError('Password must be at least 8 characters');

    setIsLoading(true);
    console.log('Registering User:', { name, email, password, role });
  };

  const isFormInvalid = !name || !email || !password || !!nameError || !!emailError || !!passwordError || isLoading;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-200 p-4 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border-2 border-slate-300">
        
        {/* Left Side Banner */}
        <div className="hidden md:flex md:w-5/12 bg-indigo-700 flex-col justify-between p-8 text-white">
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-widest uppercase bg-indigo-800 px-3 py-1 rounded-md">EduVerse Platform</span>
            <h1 className="text-4xl font-black tracking-tight mt-2">EduVerse</h1>
            <p className="text-sm text-indigo-100 leading-relaxed font-medium">
              Start your learning journey today. Get access to premium coding tracks, project cohorts, and live community hubs.
            </p>
          </div>
          <div className="pt-6 border-t border-indigo-600">
            <p className="text-xs text-indigo-200">Join our growing ecosystem</p>
            <p className="text-lg font-bold text-white mt-0.5">100,000+ Learners</p>
          </div>
        </div>

        {/* Right Side Signup Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-10 flex flex-col justify-center bg-white">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-slate-900">Create Account</h2>
            <p className="text-xs text-slate-500 mt-1">Sign up to get access to the EduVerse platform.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-3.5">
            {/* Role Selection */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Join As</label>
              <div className="grid grid-cols-2 gap-2 bg-slate-200 p-1 rounded-xl">
                <button type="button" onClick={() => setRole('student')} className={`py-1.5 text-xs font-bold rounded-lg transition-all ${role === 'student' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600'}`}>👨‍🎓 Student</button>
                <button type="button" onClick={() => setRole('instructor')} className={`py-1.5 text-xs font-bold rounded-lg transition-all ${role === 'instructor' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600'}`}>👨‍🏫 Instructor</button>
              </div>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Full Name</label>
              <input type="text" required value={name} onChange={(e) => { setName(e.target.value); setNameError(''); }} className={`w-full px-4 py-2 text-sm bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 ${nameError ? 'border-red-500' : 'border-slate-300'}`} placeholder="John Doe" />
              {nameError && <p className="text-red-600 text-xs mt-0.5 font-medium">{nameError}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email Address</label>
              <input type="email" required autoComplete="email" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(''); }} className={`w-full px-4 py-2 text-sm bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 ${emailError ? 'border-red-500' : 'border-slate-300'}`} placeholder="example@eduverse.com" />
              {emailError && <p className="text-red-600 text-xs mt-0.5 font-medium">{emailError}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} required autoComplete="new-password" value={password} onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }} className={`w-full px-4 py-2 text-sm bg-white border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 ${passwordError ? 'border-red-500' : 'border-slate-300'}`} placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"><span className="scale-75 inline-block">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</span></button>
              </div>
              {passwordError && <p className="text-red-600 text-xs mt-0.5 font-medium">{passwordError}</p>}
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center pt-1">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" required className="w-4 h-4 text-indigo-600 border-2 border-slate-300 rounded focus:ring-indigo-500" />
                <span className="ml-2 text-xs font-medium text-slate-600">I agree to the Terms & Privacy Policy</span>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isFormInvalid} className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-[0.98] mt-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700">
              {isLoading ? 'Loading...' : 'Create Account'}
            </button>
          </form>

          {/* Link back to Login */}
          <p className="text-xs text-center text-slate-500 mt-5">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 hover:underline font-bold">Sign In</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;
