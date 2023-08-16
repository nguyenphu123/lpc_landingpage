import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  password: {
    type: String,
    required: [true, "Message is required."],
  }
});
const User =
  mongoose.models.User || mongoose.model("User", contactSchema);

export default User;
