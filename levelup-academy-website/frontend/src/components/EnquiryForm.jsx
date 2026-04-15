import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageCircle } from "lucide-react"

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    subject: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", class: "", subject: "" })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.button
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-full font-bold shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={20} />
        Book Free Workshop
      </motion.button>
    </motion.div>
  )
}