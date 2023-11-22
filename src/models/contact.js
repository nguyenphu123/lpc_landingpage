import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
  address: String,

  addressEn: String,

  addressLink: String,

  email: String,

  phoneNumber: [String],

  linkWebsite: String,

  socialAccount: [String],
  
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
