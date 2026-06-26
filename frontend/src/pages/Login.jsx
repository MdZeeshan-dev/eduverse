import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    console.log('Connecting to Eduverse API:', formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 p-4 sm:p-6 md:p-8 font-sans">
      
      {/* Main Floating Card */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[550px] border border-slate-200/60">
        
        {/* Left Banner */}
        <div className="hidden md:flex md:w-5/12 bg-gradient-to-br from-blue-700 to-indigo-900 flex-col justify-between p-8 text-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
          
          <div className="space-y-3 relative z-10">
            <span className="text-xs font-bold tracking-widest uppercase bg-white/20 px-2.5 py-1 rounded-md inline-block">
              EduVerse Live
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight">EduVerse</h1>
            <p className="text-sm text-blue-100/90 leading-relaxed">
              Learn from India's top educators. Access interactive classes, mock tests, and doubt sessions.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 relative z-10">
            <p className="text-xs text-blue-200/80 font-medium">Trusted by over</p>
            <p className="text-xl font-bold text-white">100,000+ Students</p>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="w-full md:w-7/12 p-6 sm:p-10 flex flex-col justify-center">
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Welcome Back</h2>
            <p className="text-xs text-slate-500 mt-1">Please enter your account details to continue.</p>
          </div>

          {error && (
            <div className="bg-rose-50 border-l-4 border-rose-500 text-rose-700 p-3 rounded-r-xl mb-4 text-xs flex items-center gap-2">
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Role Switcher */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Login As
              </label>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'student' })}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    formData.role === 'student'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  👨‍🎓 Student
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'teacher' })}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    formData.role === 'teacher'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  👨‍🏫 Instructor
                </button>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-slate-800 placeholder:text-slate-400"
                placeholder="student@eduverse.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-slate-800 placeholder:text-slate-400"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-medium"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password (Fixed Alignment) */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center cursor-pointer select-none">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <span className="ml-2 text-xs text-slate-500">Keep me signed in</span>
              </label>
              <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold shadow-md shadow-blue-500/10 hover:bg-blue-700 hover:shadow-lg transition-all active:scale-[0.98] mt-4"
            >
              Sign In
            </button>
          </form>

          {/* Footer Navigation */}
          <p className="text-xs text-center text-slate-500 mt-6">
            New to EduVerse?{' '}
            <a href="#" className="text-blue-600 hover:underline font-semibold">
              Create an account
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

// Fixed: Added default export
export default Login;
