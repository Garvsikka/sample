import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Activity } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-brand-black hero-gradient pt-24 pb-20 px-6 overflow-hidden">
      {/* Tertiary Yellow Glow - Subtle quality improvement */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="brand-caption"
          >
            // LevelUp Academy 2026-27
          </motion.span>

          <motion.h1 
            className="heading-main text-6xl md:text-9xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-white">MATH</span>
            <span className="text-brand-red">.</span>
            <span className="text-brand-orange">AI</span>
            <span className="text-brand-yellow">.</span>
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-snug">
            Precision engineering for the mind. We utilize <span className="text-white font-semibold">AI gamification</span> 
            to bridge the gap between abstract mathematics and real-world success.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            {/* Primary Red Button */}
            <Link
              to="/courses"
              className="px-10 py-4 bg-brand-red text-white font-extrabold uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Courses <ArrowRight size={18} />
            </Link>

            {/* Tertiary Yellow Accent Button */}
            <Link
              to="/contact"
              className="px-10 py-4 border border-brand-yellow text-brand-yellow font-extrabold uppercase text-sm tracking-widest hover:bg-brand-yellow hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              Book Workshop
            </Link>
          </div>
        </div>

        {/* Floating Quality Accent */}
        <motion.div 
          className="mt-24 pt-8 border-t border-white/10 flex gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div>
            <p className="text-brand-red font-black text-2xl">500+</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">Graduates</p>
          </div>
          <div>
            <p className="text-brand-orange font-black text-2xl">98%</p>
            <p className="text-xs uppercase tracking-widest text-gray-500">Success Rate</p>
          </div>
          <div className="hidden md:block">
            <Activity className="text-brand-yellow" size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}