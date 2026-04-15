import React from 'react';
import { Award, Briefcase, Globe, Quote, TrendingUp, User } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#000000] min-h-screen font-sans text-white">
      
      {/* 1. THE JOURNEY & THE RESULTS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-16 items-center">
          <div className="md:col-span-6 space-y-8">
            <h1 className="text-5xl font-black text-white tracking-tighter uppercase">
              NAMASTE! <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent underline decoration-red-600 decoration-4 underline-offset-8">OUR STORY</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              I started my Education Journey in Maths back in 2008 when I was myself in class 10. The sheer excitement & passion for teaching & guiding my juniors always fuelled my love for the subject.
            </p>
            
            {/* The Mission Box - Deep Gray contrast */}
            <div className="bg-[#0a0a0a] border-l-8 border-red-600 p-8 rounded-3xl shadow-2xl border-y border-r border-gray-900">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">The LevelUp Real Mission</h3>
                <p className="text-gray-300 italic font-medium text-lg leading-relaxed">
                    "Our mission isn't just academic excellence—though we're proud that over 100 students 
                    scored 90+ in 2025. Our real mission is deeper: to make students fall in love 
                    with studies and see the connection to AI, Self-driving cars, and Entrepreneurship."
                </p>
            </div>
            
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">Vaibhav Kukreja</h3>
              <p className="text-red-600 font-black text-lg uppercase tracking-widest">Founder, {{COACHING_NAME}}</p>
              <p className="text-gray-500 text-sm mt-2 font-medium">Co-Founder: Ankita Kukreja (The unwavering pillar of strength)</p>
            </div>
          </div>

          {/* 2. FOUNDER CREDENTIALS (THE TIMELINE) - Dark Card */}
          <div className="md:col-span-4 bg-[#0a0a0a] p-10 rounded-[40px] shadow-2xl border border-gray-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[80px]"></div>
            <h2 className="text-3xl font-black text-white mb-10 border-b border-gray-800 pb-4 text-center uppercase tracking-tighter">Founder Credentials</h2>
            
            <div className="space-y-10 relative">
                {/* Timeline Line */}
                <div className="absolute left-6 inset-y-0 w-0.5 bg-gray-800"></div>

              {[
                { icon: Award, label: "ISB Hyderabad Alumnus", text: "MBA - Rank Holder of Indian School of Business (ISB)." },
                { icon: Briefcase, label: "Ex-EY Senior Consultant", text: "Strategic experience at Ernst & Young (Big 4 Firm)." },
                { icon: Globe, label: "Global Hackathon Winner", text: "Awarded ₹10 Lakh by Hon. Shri Narendra Modi Ji for innovation." },
                { icon: TrendingUp, label: "Founder, ElevenX Consultancy", text: "Bagged Asia’s largest Urban Mobility project (Ropeway)." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center relative z-10 group">
                    {/* Timeline Circle */}
                  <div className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-gray-900 border border-gray-800 group-hover:border-red-600 transition-colors shadow-lg">
                      <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-lg leading-tight group-hover:text-red-500 transition-colors">{item.label}</h4>
                    <p className="text-gray-500 font-medium text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE MANIFESTO & IMAGE SECTION (Shifted to Bottom) */}
      <section className="bg-[#050505] border-t border-gray-900 py-20 px-6">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-12 px-6 md:px-12">
          
          {/* A. THE FOUNDER'S IMAGE PLACEHOLDER (Grey Box) */}
          <div className="md:col-span-7 flex justify-center md:justify-end">
            <div className="relative max-w-2xl w-full">
              <div className="bg-gray-900 w-full h-[600px] rounded-t-[100px] rounded-br-[100px] shadow-2xl border border-gray-800 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <User className="w-32 h-32 text-gray-800 group-hover:text-red-600 transition-colors" />
              </div>
            </div>
          </div>

          {/* B. CORE SPIRITUAL MANIFESTO */}
          <div className="md:col-span-5 text-center md:text-left space-y-8">
            <Quote className="w-16 h-16 text-red-600 opacity-40 mx-auto md:mx-0" />
            <h1 className="text-4xl md:text-6xl font-black leading-none tracking-tighter uppercase">
              A Mission <br /> <span className="text-red-600">Beyond</span> Academics
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 italic text-gray-300">
              "At LevelUp, education without spirituality is incomplete."
            </h2>
            <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed max-w-xl text-gray-400">
                <p>“Every class begins with the <span className="text-white font-bold">Gayatri Mantra</span>. Our Education Trips start with a <span className="text-white font-bold">Hawan ceremony</span>...”</p>
                <p>“...to inculcate Sanatana Dharma Values. We're building dharmic, confident, & wealth-conscious leaders.”</p>
            </div>
            <div className="h-1.5 w-20 bg-gradient-to-r from-red-600 to-orange-500 mx-auto md:mx-0 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.5)]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;