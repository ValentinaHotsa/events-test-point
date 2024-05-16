import mongoose from "mongoose";
import User from "./userModel.js";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  organizer: {
    type: String,
  },
  registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model("Event", eventSchema);
