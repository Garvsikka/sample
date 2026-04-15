import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download } from "lucide-react"

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 0 && !isVisible) {
        setIsVisible(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="card-glow rounded-2xl p-8 max-w-md w-full relative"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gold"
            >
              <X size={24} />
            </button>

            <div className="text-5xl mb-4">📊</div>

            <h2 className="cinematic-text text-3xl mb-4">
              Wait! Before You Go...
            </h2>

            <p className="text-gray-300 mb-6">
              Download our exclusive <span className="gold-accent font-bold">"Roadmap to 100/100 in Maths"</span> - A step-by-step guide used by our top-performing students.
            </p>

            <motion.button
              className="w-full px-6 py-3 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} /> Download Roadmap
            </motion.button>

            <p className="text-gray-500 text-sm text-center mt-4">
              100% Free. No spam. Instant delivery.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}