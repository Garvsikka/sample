import React from "react"
import { motion } from "framer-motion"

export default function PhilosophyGrid() {
  const pillars = [
    {
      icon: "✨",
      title: "Values & Character",
      subtitle: "Rooted in Wisdom",
      description: "Every class starts with Gayatri Mantra - rooting students in character and spiritual wisdom",
    },
    {
      icon: "💰",
      title: "Wealth",
      subtitle: "100x Family Success",
      description: "Academic success is the passport to financial success and entrepreneurial freedom",
    },
    {
      icon: "🕉️",
      title: "Spirituality",
      subtitle: "Knowledge & Wisdom",
      description: "Knowledge, Wisdom, Spirituality, and Patriotism form the core of our teaching",
    },
    {
      icon: "🎮",
      title: "Gamification",
      subtitle: "AI-Driven Learning",
      description: "Transform mathematics into interactive games powered by artificial intelligence",
    },
    {
      icon: "🔄",
      title: "Repetition",
      subtitle: "Daily Reinforcement",
      description: "10-minute formula tests every class ensure concept retention and mastery",
    },
    {
      icon: "🌟",
      title: "Personality Dev",
      subtitle: "Personal Growth",
      description: "Weekly PD classes develop communication, leadership, and interpersonal skills",
    },
  ]

  return (
    <section id="philosophy" className="py-20 px-6 md:px-12 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="cinematic-text text-4xl md:text-5xl mb-4">
            The <span className="gold-accent">6 Pillars</span> of LevelUp
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our philosophy combines innovation, spirituality, and excellence
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {pillars.map((pillar, idx) => (
            <motion.article
              key={idx}
              className="card-glow rounded-xl p-8 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{pillar.icon}</div>
              <div className="mb-3">
                <h3 className="text-2xl font-bold mb-1">{pillar.title}</h3>
                <p className="gold-accent text-sm font-semibold">{pillar.subtitle}</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-gold transition-all duration-300"></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}