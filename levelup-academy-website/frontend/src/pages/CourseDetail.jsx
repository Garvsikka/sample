import React from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function CourseDetail() {
  const { slug } = useParams()
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/courses" className="flex items-center gap-2 text-brand-orange mb-12 uppercase font-black text-xs italic tracking-widest group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Batches
        </Link>
        <h1 className="text-6xl md:text-8xl font-black uppercase italic mb-8 tracking-tighter leading-none">
          Batch <span className="text-brand-red">Specs.</span>
        </h1>
        <div className="bg-dark-card border border-brand-orange/20 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(255,106,0,0.05)]">
          <p className="text-gray-400 text-xl leading-relaxed mb-8">
            Curriculum data for <span className="text-white font-bold uppercase tracking-widest">{slug.replace(/-/g, ' ')}</span> is being initialized. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-black rounded-2xl border border-white/5"><p className="text-brand-yellow font-black text-xs uppercase mb-1">Status</p><p className="font-bold">Active Enrollment</p></div>
            <div className="p-6 bg-black rounded-2xl border border-white/5"><p className="text-brand-red font-black text-xs uppercase mb-1">Mentor</p><p className="font-bold">V. Khukhreja</p></div>
          </div>
        </div>
      </div>
    </main>
  )
}