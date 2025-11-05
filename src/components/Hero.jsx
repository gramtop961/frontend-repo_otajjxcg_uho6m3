import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-white/60 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-medium text-gray-700">AI-powered • No lock-in • You own everything</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build your entire web presence in minutes — and keep full ownership
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl">
            ASPiration is the all-in-one platform that designs, builds, and launches your site, domain, email, and analytics — without long-term contracts.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#calculator" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition-shadow">
              <Rocket className="w-5 h-5" />
              Try the savings calculator
            </a>
            <a href="#how-it-works" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-gray-800 bg-white/80 backdrop-blur border border-gray-200 hover:bg-white transition">
              <Shield className="w-5 h-5 text-purple-600" />
              See how it works
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white"></div>
    </section>
  );
}
