
import './globals.css';import React from 'react';
import { Camera, MessageSquare, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function PureMediaLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-tighter text-blue-500">PURE MEDIA</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-400 transition">Features</a>
          <a href="#" className="hover:text-blue-400 transition">Security</a>
          <a href="#" className="hover:text-blue-400 transition">Docs</a>
        </div>
        <button className="bg-blue-600 px-5 py-2 rounded-full font-medium hover:bg-blue-700">
          Launch App
        </button>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
          AI-Powered Discovery
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Social Media, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Redefined.
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          High-quality photos, seamless real-time messaging, and an AI that actually understands what you want to see.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Camera className="text-blue-500" size={32} />}
            title="Ultra-HD Media"
            desc="No compression. Share your photos and videos in the quality they were meant to be seen."
          />
          <FeatureCard 
            icon={<Sparkles className="text-purple-500" size={32} />}
            title="AI Discovery"
            desc="Smart algorithms that prioritize genuine content and creative creators over ads."
          />
          <FeatureCard 
            icon={<MessageSquare className="text-green-500" size={32} />}
            title="Encrypted Chat"
            desc="Real-time messaging with end-to-end encryption for total privacy."
          />
        </div>
      </section>

      {/* Legal/Footer */}
      <footer className="py-12 px-6 border-t border-gray-900 text-center text-gray-500 text-sm">
        <p>© 2024 Pure-media. Intellectual property of Sule Toaletu.</p>
        <p className="mt-2 text-xs">Platform Maintenance Fee: 15%</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-2xl border border-gray-800 bg-black hover:border-blue-500/50 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
