import React from 'react';
import { Sparkles, Zap, Target, BookOpen, Clock, ShieldCheck, Trophy, Brain, Camera } from 'lucide-react';

const CourseCard = ({ title, subtitle, subjects, xFactor, frequency, target, icon: Icon, color }) => (
  <div className="group bg-[#0a0a0a] border border-gray-900 rounded-[40px] overflow-hidden hover:border-red-600/50 transition-all duration-500 flex flex-col h-full shadow-2xl">
    
    {/* BATCH IMAGE SLOT */}
    <div className="relative w-full aspect-[16/10] bg-gray-950 border-b border-gray-900 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
      {/* Icon Placeholder for when images aren't present */}
      <Camera className="w-12 h-12 text-gray-800 group-hover:text-red-600 transition-colors z-0" />
      <span className="absolute bottom-4 left-6 z-20 text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
        {title} Batch Photo
      </span>
      <div className="absolute top-4 right-4 z-20 bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
        Active Batch
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-[60px] group-hover:bg-red-600/10 transition-colors"></div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-xl bg-gray-950 border border-gray-800`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">{title}</h3>
          <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${color}`}>{subtitle}</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-8 flex-grow">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-gray-600" />
          <p className="text-gray-400 text-xs font-medium"><span className="text-white">Frequency:</span> {frequency}</p>
        </div>
        <div className="flex items-center gap-3">
          <Target className="w-4 h-4 text-gray-600" />
          <p className="text-gray-400 text-xs font-medium"><span className="text-white">Target:</span> {target}</p>
        </div>
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-gray-600" />
          <p className="text-gray-400 text-xs font-medium leading-tight"><span className="text-white">Subjects:</span> {subjects}</p>
        </div>
      </div>

      <div className="bg-black/50 p-5 rounded-3xl border border-gray-900 group-hover:border-red-900/50 transition-colors">
        <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] mb-2">The LevelUp X-Factor</p>
        <p className="text-sm text-gray-200 font-bold italic leading-snug">"{xFactor}"</p>
      </div>
    </div>
  </div>
);

const Courses = () => {
  return (
    <div className="bg-[#000000] min-h-screen font-sans text-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent blur-[140px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/30 border border-red-900/50 mb-10">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-xs font-black uppercase tracking-[0.4em]">Academic Battlegrounds</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
            MASTER THE <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent italic">CURRICULUM</span>
          </h1>
          
          <div className="max-w-3xl mx-auto py-6 px-10 bg-yellow-400 text-black font-black uppercase tracking-tight text-lg md:text-xl rounded-2xl shadow-[0_20px_50px_rgba(255,215,0,0.2)]">
            "Maths will be there in every competitive exam on Planet Earth. There is no escape. Master it."
          </div>
        </div>
      </section>

      {/* CLASSES 11 & 12 */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 border-l-8 border-red-600 pl-6">
           <h2 className="text-4xl font-black uppercase tracking-tighter">Senior Secondary <span className="text-gray-600">(11-12)</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <CourseCard 
            title="Dronacharya" 
            subtitle="Maths Mastery" 
            subjects="Maths, CBSE + CUET + JEE"
            frequency="3 Classes / Week"
            target="CBSE + CUET + JEE"
            xFactor="Integration of AI-based maths games for logic building."
            icon={Brain}
            color="text-orange-500"
          />
          <CourseCard 
            title="Nikola Tesla" 
            subtitle="Physics Excellence" 
            subjects="Physics, CBSE + CUET + JEE"
            frequency="3 Classes / Week"
            target="CBSE + CUET + JEE"
            xFactor="Experimental physics modules and innovation lab focus."
            icon={Zap}
            color="text-blue-500"
          />
          <CourseCard 
            title="Warren Buffet" 
            subtitle="Accounts & Finance" 
            subjects="Accounts, CBSE + CUET"
            frequency="3 Classes / Week"
            target="CBSE + CUET"
            xFactor="Specialized sessions on Finance & Money management."
            icon={Trophy}
            color="text-green-500"
          />
        </div>
      </section>

      {/* CLASSES 8, 9 & 10 */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-[#050505] rounded-[80px] border border-gray-900 my-20">
        <div className="flex items-center gap-4 mb-12 px-8 border-l-8 border-orange-500 pl-6">
           <h2 className="text-4xl font-black uppercase tracking-tighter">Foundation <span className="text-gray-600">(8-10)</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          <CourseCard 
            title="Brahmāstra" 
            subtitle="JEE Foundation" 
            subjects="Maths, Physics, Chem, Logical Reasoning"
            frequency="Every Sunday"
            target="JEE Aspirants"
            xFactor="Basic Finance & wealth consciousness sessions."
            icon={Sparkles}
            color="text-red-500"
          />
          <CourseCard 
            title="Lakshya 100" 
            subtitle="CBSE Toppers" 
            subjects="Maths, Science, English, SST"
            frequency="3 Classes / Week"
            target="Class 9 & 10"
            xFactor="Includes personality development and speech training."
            icon={Target}
            color="text-red-600"
          />
          <CourseCard 
            title="Inception" 
            subtitle="Junior Foundation" 
            subjects="Maths & Science Excellence"
            frequency="3 Classes / Week"
            target="Class 8th"
            xFactor="The perfect bridge from school to competitive logic."
            icon={Zap}
            color="text-yellow-500"
          />
        </div>
      </section>

      {/* TRUST FEATURES */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center border-t border-gray-900">
        <p className="text-gray-500 font-black uppercase tracking-[0.5em] mb-16 text-sm">The LevelUp Ecosystem</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "24x7 Support", icon: ShieldCheck },
            { label: "Chanakya Series", icon: BookOpen },
            { label: "AI Learning", icon: Brain },
            { label: "1:1 Mentoring", icon: Target }
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center group">
              <f.icon className="w-12 h-12 text-gray-800 group-hover:text-red-600 transition-colors mb-4" />
              <span className="text-white font-black uppercase tracking-tighter text-lg">{f.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;