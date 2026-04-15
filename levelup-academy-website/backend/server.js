import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import enquiryRoutes from "./routes/enquiry.js"
import courseRoutes from "./routes/courses.js"
import founderRoutes from "./routes/founder.js"
import errorHandler from "./middleware/errorHandler.js"

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// Connect to MongoDB
connectDB()

// Routes
app.use("/api/enquiry", enquiryRoutes)
app.use("/api/courses", courseRoutes)
app.use("/api/founder", founderRoutes)

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "Server is running",
    timestamp: new Date().toISOString(),
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
})

// Error handling middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || "development"

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${NODE_ENV} mode`)
})

export default app