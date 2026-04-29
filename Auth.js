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
import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const SAMPLE_POSTS = [
  { id: 1, user: 'Sule_Toaletu', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800', likes: '1.2k' },
  { id: 2, user: 'AI_Explorer', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800', likes: '840' }
];

export function Feed() {
  return (
    <div className="max-w-xl mx-auto py-8 px-4 space-y-8 bg-black min-h-screen">
      {SAMPLE_POSTS.map(post => (
        <div key={post.id} className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600" />
              <span className="font-bold text-white text-sm">{post.user}</span>
            </div>
            <MoreHorizontal className="text-zinc-500" />
          </div>
          
          {/* Media */}
          <img src={post.img} alt="Post content" className="w-full object-cover max-h-[500px]" />

          {/* Actions */}
          <div className="p-4">
            <div className="flex gap-4 mb-3">
              <Heart className="text-white hover:text-red-500 cursor-pointer transition" size={24} />
              <MessageCircle className="text-white hover:text-blue-500 cursor-pointer transition" size={24} />
              <Share2 className="text-white hover:text-green-500 cursor-pointer transition" size={24} />
            </div>
            <p className="text-white font-semibold text-sm">{post.likes} likes</p>
            <p className="text-zinc-400 text-sm mt-1">
              <span className="font-bold text-white mr-2">{post.user}</span>
              Redefining high-quality media with Pure Media AI. #PureMedia
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
