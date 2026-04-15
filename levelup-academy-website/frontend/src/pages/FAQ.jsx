import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    { q: "Is LevelUp for Commerce only?", a: "We are the specialists in high-performance Commerce mentorship for XI, XII, and CUET." },
    { q: "Who leads the sessions?", a: "All core modules are led personally by Vaibhav Khukhreja." },
    { q: "Is there doubt support?", a: "Yes. 24/7 priority access for all enrolled students." }
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-8xl font-black text-center mb-20 uppercase italic tracking-tighter leading-none">F.A.<span className="text-brand-yellow">Q.</span></h1>
        {faqs.map((faq, i) => (
          <div key={i} className="mb-6 bg-dark-card rounded-3xl border border-white/5 overflow-hidden transition-all hover:border-brand-red/30">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-8 flex justify-between items-center text-left">
              <span className={`font-bold text-xl ${openIndex === i ? 'text-brand-orange' : 'text-white'}`}>{faq.q}</span>
              <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? "text-brand-red rotate-180" : "text-gray-600"}`} />
            </button>
            {openIndex === i && (
              <div className="px-8 pb-8 text-gray-400 leading-relaxed border-t border-white/5 pt-6 italic">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}