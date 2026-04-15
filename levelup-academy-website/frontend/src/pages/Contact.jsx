import React from "react"

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-8xl font-black uppercase italic leading-[0.8] mb-12">SEND A <br/><span className="text-brand-orange text-9xl">SIGNAL.</span></h1>
          <div className="space-y-10 border-l border-brand-red/20 pl-8">
            <div><p className="text-brand-yellow font-black uppercase text-[10px] tracking-widest mb-2">Location</p><p className="text-2xl font-bold">Rohini / Pitampura, Delhi</p></div>
            <div><p className="text-brand-red font-black uppercase text-[10px] tracking-widest mb-2">Direct Email</p><p className="text-2xl font-bold">vaibhav@levelup.com</p></div>
          </div>
        </div>
        <div className="bg-dark-card p-10 rounded-[3rem] border border-white/5 shadow-2xl">
          <form className="space-y-6">
            <input placeholder="NAME" className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-brand-red outline-none transition-all placeholder:text-gray-700 font-bold" />
            <select className="w-full bg-black border border-white/10 p-5 rounded-2xl focus:border-brand-orange outline-none transition-all text-gray-500 font-bold appearance-none">
              <option>SELECT CATEGORY</option>
              <option>CLASS XI</option>
              <option>CLASS XII</option>
              <option>CUET 2026</option>
            </select>
            <button className="w-full py-5 bg-brand-red hover:bg-brand-orange text-white font-black uppercase rounded-2xl shadow-[0_10px_40px_rgba(255,0,0,0.3)] transition-all active:scale-95">
              Initiate Contact
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}