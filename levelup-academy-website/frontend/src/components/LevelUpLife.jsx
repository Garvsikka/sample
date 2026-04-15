import React from "react"
import { motion } from "framer-motion"
import { MapPin, Trophy, Calendar } from "lucide-react"

export default function LevelUpLife() {
  const programs = [
    {
      icon: <MapPin size={40} />,
      title: "Industrial Visits",
      description: "Explore real-world industries combined with Hawan & Gaushala visits for spiritual growth",
      color: "from-gold/50",
    },
    {
      icon: <Trophy size={40} />,
      title: "Placement Level Prep",
      description: "Mock GDs & PIs using abstract topics to prepare for campus placements",
      color: "from-neon-cyan/50",
    },
    {
      icon: <Calendar size={40} />,
      title: "Success Festival",
      description: "Annual awards & trophies gallery celebrating student achievements",
      color: "from-neon-purple/50",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="cinematic-text text-4xl md:text-5xl mb-4">
            The <span className="gold-accent">LevelUp</span> Life Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Beyond academics - building character, confidence, and success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              className="card-glow rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="text-gold mb-6">{program.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-400 leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Teaser */}
        <motion.div
          className="mt-16 card-glow rounded-xl p-8 text-center border border-gold/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 gold-accent">
            Hall of Fame Gallery
          </h3>
          <p className="text-gray-400 mb-6">
            View past winners, achievements, and transformation stories of LevelUp students
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}