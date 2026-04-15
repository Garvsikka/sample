import React from "react"
import { motion } from "framer-motion"

export default function CinematicTeaching() {
  const stages = [
    {
      level: "Level 1",
      title: "Concept Unlock",
      description: "Learn mathematical concepts through interactive AI games",
      icon: "🎮",
    },
    {
      level: "Level 2",
      title: "Formula Mastery",
      description: "10-minute formula tests every class to reinforce learning",
      icon: "⚡",
    },
    {
      level: "Level 3",
      title: "Boss Battle",
      description: "Solve complex problems against AI-powered challenges",
      icon: "🏆",
    },
    {
      level: "Level 4",
      title: "Champion Status",
      description: "Achieve excellence and join our Hall of Fame",
      icon: "👑",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="cinematic-text text-4xl md:text-5xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-neon-cyan to-neon-purple">
              Cinematic Teaching
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            How we gamify mathematics to unlock your full potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              className="card-glow rounded-xl p-6 cursor-pointer hover:shadow-lg hover:shadow-gold/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4" aria-hidden="true">{stage.icon}</div>
              <p className="text-gold text-sm font-semibold mb-2">{stage.level}</p>
              <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
              <p className="text-gray-400 text-sm">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}