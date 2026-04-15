import React from "react"
import { motion } from "framer-motion"
import { Award, Briefcase, Target, Globe } from "lucide-react"

export default function AboutFounder() {
  const achievements = [
    {
      icon: <Award size={32} />,
      title: "Global Hackathon Winner",
      description: "Awarded by PM Narendra Modi for groundbreaking innovation in educational technology",
      year: "2023",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Ernst & Young Consultant",
      description: "Ex-Consultant at one of the world's leading professional services firms with global experience",
      year: "2020",
    },
    {
      icon: <Globe size={32} />,
      title: "ISB Alumni",
      description: "Graduate of Indian School of Business, India's premier business school",
      year: "2019",
    },
    {
      icon: <Target size={32} />,
      title: "Visionary Educationist",
      description: "Founded LevelUp Academy to revolutionize mathematics education through AI and gamification",
      year: "2023",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="card-glow rounded-2xl h-96 md:h-[500px] flex items-center justify-center"
              whileHover={{ y: -10 }}
            >
              <article className="text-center">
                <div className="text-8xl mb-4" aria-hidden="true">🎓</div>
                <h2 className="text-2xl font-bold gold-accent">
                  Vaibhav Kukreja
                </h2>
                <p className="text-gray-400 mt-2">Founder & CEO</p>
              </article>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cinematic-text text-4xl md:text-5xl mb-6">
              Meet Our <span className="gold-accent">Founder</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Vaibhav Kukreja is an accomplished educator and entrepreneur with a vision to transform how students learn mathematics. With education from ISB and consulting experience at EY, he bridges the gap between cutting-edge technology and timeless wisdom.
            </p>

            <div className="mb-8 p-6 card-glow rounded-xl border border-gold/20">
              <h3 className="text-xl font-bold mb-4 gold-accent">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                "To make students <strong>fall in love with studies</strong> and connect them to AI, stock markets, and entrepreneurship. We believe that every student has the potential to excel, and our role is to unlock that potential through innovation, spirituality, and excellence."
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-neon-cyan flex-shrink-0 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 flex items-center gap-2">
                      {achievement.title}
                      <span className="text-xs text-gray-500">({achievement.year})</span>
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}