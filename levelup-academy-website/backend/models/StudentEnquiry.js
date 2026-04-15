import mongoose from "mongoose"

const studentEnquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number"],
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
    },
    class: {
      type: String,
      enum: ["8", "9", "10", "11", "12", "other"],
      required: [true, "Please select your class"],
    },
    subject: {
      type: String,
      enum: ["Maths", "Physics", "Chemistry", "Accounts", "General", "Other"],
      required: [true, "Please select a subject"],
    },
    message: {
      type: String,
      trim: true,
      maxlength: [500, "Message cannot exceed 500 characters"],
    },
    source: {
      type: String,
      enum: ["Website", "Social Media", "Referral", "Advertisement", "Direct"],
      default: "Website",
    },
    status: {
      type: String,
      enum: ["pending", "contacted", "enrolled", "inactive"],
      default: "pending",
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

// Index for faster queries
studentEnquirySchema.index({ email: 1 })
studentEnquirySchema.index({ createdAt: -1 })

export default mongoose.model("StudentEnquiry", studentEnquirySchema)