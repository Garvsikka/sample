const errorHandler = (err, req, res, next) => {
  console.error(`❌ Error: ${err.message}`)

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message)
    return res.status(400).json({
      success: false,
      message: messages.join(", "),
    })
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0]
    return res.status(400).json({
      success: false,
      message: `${field} already exists`,
    })
  }

  // Mongoose cast error
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    })
  }

  // Generic error
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  })
}

export default errorHandler