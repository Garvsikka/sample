import React from 'react';
import { Star, BookOpen, Globe, Users, Target } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const cityData = [
  { name: 'Delhi', value: 60 },
  { name: 'Mumbai', value: 7 },
  { name: 'Bangalore', value: 7 },
  { name: 'Gurgaon', value: 5 },
  { name: 'Noida', value: 6 },
  { name: 'Chennai', value: 4 },
  { name: 'Other Cities', value: 7 }
];

const COLORS = ['#FF0000', '#FF4D00', '#FF8000', '#FFB300', '#FFD700', '#E60000', '#CC0000'];

const Home = () => {
  return (
    <div className="bg-[#000000] min-h-screen font-sans overflow-x-hidden text-white">
      
      {/* 1. HERO SECTION - Side-by-Side */}
      <section className="relative pt-24 pb-40 px-6 bg-[#000000] overflow-hidden border-b border-gray-900">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 opacity-20 blur-[140px]"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="w-full lg:w-[55%] text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-tight mb-6 uppercase">
              MATHS MASTERS OF <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent italic">
                ROHINI & PITAMPURA
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-lg mb-10 leading-relaxed">
              Transforming academic results into financial destiny. Join the movement that's 100x-ing family wealth through mastery.
            </p>
            <button className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white px-12 py-5 rounded-2xl text-xl font-black shadow-[0_10px_40px_rgba(255,0,0,0.4)] hover:scale-105 transition-all uppercase">
              BOOK A DEMO CLASS
            </button>
          </div>

          <div className="w-full lg:w-[40%]">
            <div className="bg-[#0a0a0a] aspect-[4/3] rounded-[50px] border-2 border-gray-900 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
              <Users className="w-20 h-20 text-gray-800 group-hover:text-red-600 transition-colors" />
              <span className="mt-4 text-gray-700 font-bold uppercase tracking-[0.2em] text-xs">Student Success Feature</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID - In a dark rectangle */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="bg-[#0a0a0a] rounded-[40px] shadow-[0_25px_60px_-15px_rgba(255,0,0,0.2)] border border-gray-900 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-gray-900">
          {[
            { label: "CTS Enrolled", val: "7000+", icon: Star },
            { label: "Global Users", val: "1 Lakh+", icon: BookOpen },
            { label: "Total Impact", val: "10M+", icon: Globe },
            { label: "Reach", val: "PAN-INDIA", icon: Target }
          ].map((stat, i) => (
            <div key={i} className="p-10 text-center hover:bg-red-950/20 transition-colors">
              <stat.icon className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="text-4xl font-black text-white">{stat.val}</h3>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. DYNAMIC CHART SECTION - Always Visible City Names */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full h-[500px] lg:w-1/2 bg-[#050505] rounded-[60px] p-10 relative border border-gray-900">
            <ResponsiveContainer width="100%" h="100%">
              <PieChart>
                <Tooltip 
                  formatter={(value) => `${value}%`} 
                  contentStyle={{backgroundColor: '#000', border: '1px solid #333', borderRadius: '12px'}}
                />
                <Pie 
                  data={cityData} 
                  innerRadius={90} 
                  outerRadius={140} 
                  paddingAngle={5} 
                  dataKey="value"
                  label={({ name }) => name} // City names always visible
                  labelLine={true}
                >
                  {cityData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#000" strokeWidth={3}/>)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="block text-3xl font-black text-white italic">INDIA</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Expansion</span>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase">
              EVERY CITY <br/> <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">OF INDIA</span>
            </h2>
            <p className="text-xl text-gray-400 font-bold italic border-l-8 border-red-600 pl-8 py-4 bg-red-950/10 rounded-r-3xl">
              "We mentored students from almost every city of India! Our geographic footprint is as dynamic as our curriculum."
            </p>
          </div>
        </div>
      </section>

      {/* 4. STUDENT TESTIMONIALS */}
      <section className="py-32 px-6 bg-[#050505] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white uppercase">Student Voices</h2>
            <div className="h-2 w-24 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.5)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { score: "98/100 - CBSE", text: "The Chanakya Test Series changed how I viewed maths. It wasn't about practice; it was about the logic behind the numbers." },
              { score: "100 Percentile - CUET", text: "LevelUp isn't just a tuition center. The personality development sessions gave me the confidence to ace my interviews." },
              { score: "JEE Qualifier", text: "The gamified learning approach made the toughest calculus problems feel like a video game. Pure genius teaching." }
            ].map((t, i) => (
              <div key={i} className="bg-[#000000] p-10 rounded-[40px] border border-gray-800 shadow-2xl relative mt-16 group hover:border-red-600 transition-all duration-300">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#0a0a0a] border-8 border-[#000000] flex items-center justify-center">
                   <Users className="w-12 h-12 text-gray-800 group-hover:text-red-500" />
                </div>
                <div className="pt-16 text-center">
                  <p className="text-gray-400 italic mb-8 font-medium leading-relaxed">"{t.text}"</p>
                  <h4 className="font-black text-white text-2xl tracking-tight">Student</h4>
                  <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">{t.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;