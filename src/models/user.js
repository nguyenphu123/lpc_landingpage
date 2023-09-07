import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  email: String,
  password: String,
  role: String,
  loginCount: Number,
  status: String,
});
const User = mongoose.models.User || mongoose.model("User", contactSchema);

export default User;
