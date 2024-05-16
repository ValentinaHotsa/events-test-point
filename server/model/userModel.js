import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  birthDate: {
    type: String,
    required: [true, "Date is required"],
  },
  source: {
    type: String,
    enum: ["Social media", "Friends", "Found myself"],
  },
});

export default mongoose.model("User", userSchema);
