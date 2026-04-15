import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-[12rem] font-black text-brand-red italic leading-none animate-pulse">404</h1>
      <p className="text-2xl font-bold uppercase mb-10 tracking-widest text-brand-yellow">Route Deflected / Not Found</p>
      <Link to="/" className="px-12 py-5 bg-lava-gradient text-white font-black rounded-2xl uppercase tracking-widest text-xs shadow-[0_0_40px_rgba(255,0,0,0.3)] hover:scale-105 transition-all">
        Return to Base
      </Link>
    </main>
  )
}