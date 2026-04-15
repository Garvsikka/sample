import React, { useState } from "react"
import { motion } from "framer-motion"

export default function IssueSolver() {
  const [hoveredId, setHoveredId] = useState(null)

  const issues = [
    {
      id: 1,
      problem: "Forgetting Trigonometry Formulas",
      icon: "📐",
      solution: "Daily formula tests + Mnemonics + AI-powered revision games",
    },
    {
      id: 2,
      problem: "Fearing Integration Problems",
      icon: "∫",
      solution: "Step-by-step tutorials + Interactive problem solver + Expert doubt support",
    },
    {
      id: 3,
      problem: "Struggling with Calculus Concepts",
      icon: "📈",
      solution: "Visual learning + Real-world applications + Daily practice with AI feedback",
    },
    {
      id: 4,
      problem: "Lack of Confidence in Exams",
      icon: "💪",
      solution: "Mock tests + Personality development classes + Success mentorship",
    },
    {
      id: 5,
      problem: "Time Management Issues",
      icon: "⏰",
      solution: "Structured timetable + Priority-based learning + Efficient study techniques",
    },
    {
      id: 6,
      problem: "Weak Fundamentals",
      icon: "🏗️",
      solution: "Foundation rebuilding program + One-on-one mentoring + Customized learning paths",
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
            Most Frequent <span className="neon-cyan">Issues</span> We Solve
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hover over each issue to see how LevelUp Academy solves it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue) => (
            <motion.div
              key={issue.id}
              className="relative h-64 cursor-pointer group"
              onMouseEnter={() => setHoveredId(issue.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Front */}
              <motion.div
                className="card-glow rounded-xl p-6 h-full flex flex-col justify-center items-center text-center absolute inset-0"
                animate={{
                  opacity: hoveredId === issue.id ? 0 : 1,
                  rotateY: hoveredId === issue.id ? 90 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="text-6xl mb-4" aria-hidden="true">{issue.icon}</div>
                <h3 className="text-xl font-bold">{issue.problem}</h3>
              </motion.div>

              {/* Back */}
              <motion.div
                className="card-glow rounded-xl p-6 h-full flex flex-col justify-center items-center text-center absolute inset-0 bg-gradient-to-br from-gold/20 to-neon-cyan/20"
                animate={{
                  opacity: hoveredId === issue.id ? 1 : 0,
                  rotateY: hoveredId === issue.id ? 0 : 90,
                }}
                transition={{ duration: 0.3 }}
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-sm leading-relaxed">{issue.solution}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}