import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const contactInfo = [
    { icon: <Phone size={20} />, text: "+91-XXXX-XXXX-XX", label: "Phone" },
    { icon: <Mail size={20} />, text: "hello@levelupacademy.com", label: "Email" },
    { icon: <MapPin size={20} />, text: "Rohini & Pitampura, Delhi", label: "Location" },
  ]

  const socialLinks = [
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "#" },
    { icon: <Facebook size={24} />, label: "Facebook", href: "#" },
    { icon: <Twitter size={24} />, label: "Twitter", href: "#" },
    { icon: <Instagram size={24} />, label: "Instagram", href: "#" },
  ]

  return (
    <footer className="bg-dark-900 border-t border-gold/20 pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-gold flex-shrink-0">{info.icon}</div>
              <div>
                <p className="text-gray-500 text-sm">{info.label}</p>
                <p className="text-gray-200">{info.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gold/20 my-12"></div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="cinematic-text text-2xl gold-accent mb-4">
              LevelUp Academy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming mathematics education through AI, innovation, and spiritual wisdom.
            </p>
          </motion.article>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            {["Home", "Courses", "About", "Programs"].map((link) => (
              <Link
                key={link}
                to="#"
                className="block text-gray-400 hover:gold-accent transition mb-2 text-sm"
              >
                {link}
              </Link>
            ))}
          </motion.nav>

          {/* Resources */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Resources</h4>
            {["Blog", "Downloads", "Test Series", "FAQ"].map((link) => (
              <Link
                key={link}
                to="#"
                className="block text-gray-400 hover:gold-accent transition mb-2 text-sm"
              >
                {link}
              </Link>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="text-gold hover:neon-cyan transition"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © 2024-2026 LevelUp Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <Link to="#" className="hover:gold-accent transition">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:gold-accent transition">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}