import React from 'react';
import { Sparkles, Compass, Rocket, Zap, Heart, Camera, Trophy, Building, Tablet, Users } from 'lucide-react';

const PhotoPlaceholder = ({ label }) => (
  <div className="w-full h-full bg-[#0a0a0a] border-2 border-dashed border-gray-800 rounded-[40px] flex flex-col items-center justify-center group-hover:border-red-500/50 transition-all duration-500 shadow-inner">
    <Camera className="w-12 h-12 text-gray-800 group-hover:text-red-500 transition-colors mb-3" />
    <span className="text-gray-600 font-black uppercase tracking-[0.2em] text-[10px] text-center px-4">{label}</span>
  </div>
);

const ActivityCard = ({ title, desc, icon: Icon, span = "col-span-1" }) => (
  <div className={`${span} bg-[#0a0a0a] border border-gray-900 p-8 rounded-[40px] hover:border-orange-600/50 transition-all group relative overflow-hidden`}>
    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/5 blur-3xl group-hover:bg-orange-600/10 transition-colors"></div>
    <Icon className="w-10 h-10 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tighter">{title}</h3>
    <p className="text-gray-400 font-medium leading-relaxed text-sm">{desc}</p>
    <div className="mt-8 aspect-video">
      <PhotoPlaceholder label={`${title} Gallery`} />
    </div>
  </div>
);

const Programs = () => {
  return (
    <div className="bg-[#000000] min-h-screen font-sans text-white overflow-x-hidden">
      
      {/* 1. HERO - BEYOND THE CLASSROOM */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent blur-[140px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/30 border border-red-900/50 mb-10">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-xs font-black uppercase tracking-[0.4em]">{{COACHING_NAME}} Programs</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
            BEYOND THE <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent italic">CLASSROOM</span>
          </h1>
          
          <div className="max-w-3xl mx-auto py-8 px-10 bg-gray-900/30 border border-gray-800 rounded-[30px] backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-gray-300 font-bold leading-tight italic">
              "Our students develop into smart dynamic personalities—not just <span className="text-red-600 underline decoration-red-600 underline-offset-4">marks factories</span>."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE SPIRITUAL FOUNDATION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
           <Heart className="text-red-600 w-8 h-8" />
           <h2 className="text-3xl font-black uppercase tracking-widest">Spiritual Rooting</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ActivityCard 
            icon={Compass}
            title="Farmhouse Havan" 
            desc="Annual Education trips begin at an organic farmhouse with a sacred Havan ceremony to seek blessings."
          />
          <ActivityCard 
            icon={Sparkles}
            title="Saraswati Maa Pran Pratishtha" 
            desc="Inculcating the value of wisdom and devotion in every student's heart through sacred rituals."
          />
          <ActivityCard 
            icon={Building}
            title="CP Hanuman Mandir Visit" 
            desc="Annual visit to the historic Hanuman Mandir to build connection with heritage and inner strength."
          />
        </div>
      </section>

      {/* 3. PHYSICAL & TEAM LEADERSHIP */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-[#050505] rounded-[60px] border border-gray-900 my-10">
        <div className="flex items-center gap-4 mb-12 px-6">
           <Trophy className="text-orange-500 w-8 h-8" />
           <h2 className="text-3xl font-black uppercase tracking-widest">Physical & Team Spirit</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-6">
          <ActivityCard 
            icon={Zap}
            title="Annual Cricket Tournament" 
            desc="Strategic thinking, teamwork, and leadership on the pitch. The ultimate {{COACHING_NAME}} sports event."
          />
          <ActivityCard 
            icon={Zap}
            title="Annual Swimming Session" 
            desc="Endurance and refreshment. Building physical fitness alongside academic rigor."
          />
        </div>
      </section>

      {/* 4. CORPORATE & TECH EXPOSURE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
           <Rocket className="text-yellow-500 w-8 h-8" />
           <h2 className="text-3xl font-black uppercase tracking-widest">Future Ready Exposure</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <ActivityCard 
            span="md:col-span-8"
            icon={Building}
            title="Yakult Factory Industrial Visit" 
            desc="Observing large-scale operations and manufacturing. Real-world business education."
          />
          <ActivityCard 
            span="md:col-span-4"
            icon={Tablet}
            title="AI Based Maths Games" 
            desc="Gamifying the toughest concepts using cutting-edge AI-driven logic."
          />
          <ActivityCard 
            span="md:col-span-6"
            icon={Users}
            title="Career Fair Volunteers" 
            desc="Students act as organizers in mega career fairs, learning management and networking."
          />
          <ActivityCard 
            span="md:col-span-6"
            icon={Trophy}
            title="Carnivals & Logistics" 
            desc="Fostering entrepreneurial spirit by handling stalls and event logistics at carnivals."
          />
        </div>
      </section>

    </div>
  );
};

export default Programs;