import React, { useState } from 'react';
import { Lock, Mail, UserPlus } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Pure Media</h2>
          <p className="text-zinc-400 mt-2">{isLogin ? 'Welcome back' : 'Create your account'}</p>
        </div>

        <form className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <input type="text" placeholder="Full Name" className="w-full bg-black border border-zinc-700 rounded-xl py-3 px-11 text-white focus:border-blue-500 outline-none transition" />
              <UserPlus className="absolute left-4 top-3.5 text-zinc-500" size={18} />
            </div>
          )}
          <div className="relative">
            <input type="email" placeholder="Email Address" className="w-full bg-black border border-zinc-700 rounded-xl py-3 px-11 text-white focus:border-blue-500 outline-none transition" />
            <Mail className="absolute left-4 top-3.5 text-zinc-500" size={18} />
          </div>
          <div className="relative">
            <input type="password" placeholder="Password" className="w-full bg-black border border-zinc-700 rounded-xl py-3 px-11 text-white focus:border-blue-500 outline-none transition" />
            <Lock className="absolute left-4 top-3.5 text-zinc-500" size={18} />
          </div>
          
          <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
            {isLogin ? 'Sign In' : 'Join Now'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-zinc-400 hover:text-blue-400 transition">
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
