import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronDown, ArrowRight } from "lucide-react"

export default function CoursesPage() {
  const [expandedClass, setExpandedClass] = useState(null)

  const courses = {
    "Classes 11-12": [
      {
        id: 1,
        name: "Dronacharya Batch",
        subject: "🔢 Maths",
        xFactor: "Stock Market Insights",
        description: "Master advanced mathematics with real-world financial applications",
        slug: "dronacharya-batch-maths",
      },
      {
        id: 2,
        name: "Nikola Tesla Batch",
        subject: "⚛️ Physics",
        xFactor: "Innovation Lab",
        description: "Understand physics through innovation and practical experiments",
        slug: "nikola-tesla-batch-physics",
      },
      {
        id: 3,
        name: "Warren Buffet Batch",
        subject: "💼 Accounts",
        xFactor: "Finance & Money Sessions",
        description: "Learn accounting with entrepreneurial finance perspectives",
        slug: "warren-buffet-batch-accounts",
      },
    ],
    "Classes 8-10": [
      {
        id: 4,
        name: "Brahmastra Batch",
        subject: "🎯 JEE Foundation",
        xFactor: "Early Competitive Prep",
        description: "Build strong fundamentals for JEE entrance exams",
        slug: "brahmastra-batch-jee-foundation",
      },
      {
        id: 5,
        name: "Lakshya 100",
        subject: "📚 CBSE",
        xFactor: "100% Score Strategy",
        description: "Achieve excellence in CBSE with strategic learning",
        slug: "lakshya-100-cbse",
      },
      {
        id: 6,
        name: "Inception Batch",
        subject: "🚀 Class 8",
        xFactor: "Foundation Building",
        description: "Build rock-solid mathematical foundations from the start",
        slug: "inception-batch-class8",
      },
    ],
  }

  return (
    <section id="courses" className="py-20 px-6 md:px-12 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="cinematic-text text-4xl md:text-5xl mb-4">
            Our <span className="gold-accent">Batches & Courses</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized programs for every level, from Class 8 to 12+
          </p>
        </motion.div>

        {Object.entries(courses).map((courseGroup, groupIdx) => (
          <motion.div key={groupIdx} className="mb-12">
            <h3 className="text-2xl font-bold mb-8 gold-accent">{courseGroup[0]}</h3>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {courseGroup[1].map((course, idx) => (
                <motion.div
                  key={course.id}
                  className="card-glow rounded-xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  onClick={() =>
                    setExpandedClass(
                      expandedClass === course.id ? null : course.id
                    )
                  }
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-gold text-sm font-semibold mb-1">
                          {course.subject}
                        </p>
                        <h3 className="text-2xl font-bold">{course.name}</h3>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedClass === course.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="text-gold" size={24} />
                      </motion.div>
                    </div>

                    <p className="text-gray-400 mb-4">{course.description}</p>

                    <div className="mb-4 p-3 bg-dark-700/50 rounded-lg border border-neon-cyan/20">
                      <p className="text-neon-cyan text-sm font-semibold">
                        ✨ {course.xFactor}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: expandedClass === course.id ? 1 : 0,
                        height: expandedClass === course.id ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gold/20 pt-4 mt-4">
                        <p className="text-sm text-gray-300 font-semibold mb-3">
                          Key Features:
                        </p>
                        {["3 Classes/Week", "24x7 Doubt Support", "Test Series", "Personal Mentoring"].map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 mb-2">
                            <span className="text-gold">→</span>
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                        <Link
                          to={`/courses/${course.slug}`}
                          className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/50 inline-flex items-center justify-center gap-2"
                        >
                          View Details <ArrowRight size={18} />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
