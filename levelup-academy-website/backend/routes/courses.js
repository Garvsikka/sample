import express from "express"

const router = express.Router()

// GET - All courses
router.get("/", (req, res) => {
  const courses = {
    "Classes 11-12": [
      {
        id: 1,
        name: "Dronacharya Batch",
        subject: "Maths",
        xFactor: "Stock Market Insights",
        price: "₹25,000/month",
      },
      {
        id: 2,
        name: "Nikola Tesla Batch",
        subject: "Physics",
        xFactor: "Innovation Lab",
        price: "₹20,000/month",
      },
      {
        id: 3,
        name: "Warren Buffet Batch",
        subject: "Accounts",
        xFactor: "Finance & Money Sessions",
        price: "₹22,000/month",
      },
    ],
    "Classes 8-10": [
      {
        id: 4,
        name: "Brahmastra Batch",
        subject: "JEE Foundation",
        xFactor: "Early Competitive Prep",
        price: "₹18,000/month",
      },
      {
        id: 5,
        name: "Lakshya 100",
        subject: "CBSE",
        xFactor: "100% Score Strategy",
        price: "₹15,000/month",
      },
      {
        id: 6,
        name: "Inception Batch",
        subject: "Class 8",
        xFactor: "Foundation Building",
        price: "₹12,000/month",
      },
    ],
  }

  res.status(200).json({
    success: true,
    data: courses,
  })
})

export default router