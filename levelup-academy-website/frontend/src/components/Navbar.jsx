import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Philosophy", path: "/philosophy" }, // Added Philosophy here
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 card-glow border-b border-gold/20 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <motion.h1
            className="cinematic-text text-2xl gold-accent"
            whileHover={{ scale: 1.05 }}
          >
            LevelUp <span className="neon-cyan">Academy</span>
          </motion.h1>
        </Link>

        <ul className="hidden md:flex gap-8 items-center list-none">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.path)
                    ? "text-gold"
                    : "text-gray-300 hover:text-gold"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-300 ${
                    isActive(item.path)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/50 text-sm"
        >
          Book Free Workshop
        </Link>

        <button
          className="md:hidden text-gold p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.ul
          className="md:hidden mt-4 flex flex-col gap-4 list-none pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path) ? "text-gold" : "text-gray-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  )
}