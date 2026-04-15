import express from "express"
import StudentEnquiry from "../models/StudentEnquiry.js"

const router = express.Router()

// POST - Create new enquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, class: studentClass, subject, message } = req.body

    // Validation
    if (!name || !email || !phone || !studentClass || !subject) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      })
    }

    // Check if email already exists
    const existingEnquiry = await StudentEnquiry.findOne({ email })
    if (existingEnquiry) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      })
    }

    const enquiry = await StudentEnquiry.create({
      name,
      email,
      phone,
      class: studentClass,
      subject,
      message,
      source: "Website",
    })

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully! We'll contact you soon.",
      data: enquiry,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// GET - Retrieve all enquiries (Admin)
router.get("/", async (req, res) => {
  try {
    const enquiries = await StudentEnquiry.find().sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// GET - Get enquiry by ID
router.get("/:id", async (req, res) => {
  try {
    const enquiry = await StudentEnquiry.findById(req.params.id)

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      })
    }

    res.status(200).json({
      success: true,
      data: enquiry,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

// PUT - Update enquiry status
router.put("/:id", async (req, res) => {
  try {
    const enquiry = await StudentEnquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Enquiry updated successfully",
      data: enquiry,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

export default router