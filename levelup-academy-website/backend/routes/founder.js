import express from "express"

const router = express.Router()

// GET - Founder information
router.get("/", (req, res) => {
  const founderInfo = {
    name: "Vaibhav Kukreja",
    title: "Founder & CEO",
    image: "👨‍💼",
    education: {
      primary: "Indian School of Business (ISB)",
      secondary: "Ernst & Young (EY) - Consultant",
    },
    achievements: [
      {
        title: "Global Hackathon Winner",
        description: "Awarded by PM Narendra Modi for innovation in education technology",
        year: 2023,
        icon: "🏆",
      },
      {
        title: "EY Consultant",
        description: "Ex-Consultant at Ernst & Young with global experience",
        year: 2020,
        icon: "💼",
      },
      {
        title: "ISB Alumni",
        description: "Indian School of Business graduate",
        year: 2019,
        icon: "🎓",
      },
    ],
    mission:
      "To make students fall in love with studies and connect them to AI, stock markets, and entrepreneurship. We believe every student has infinite potential.",
    vision:
      "Create a world where mathematics is loved, where students understand the beauty of numbers, and where education connects to real-world success.",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  }

  res.status(200).json({
    success: true,
    data: founderInfo,
  })
})

export default router