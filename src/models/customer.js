import mongoose from "mongoose";

const { Schema } = mongoose;

const customerSchema = new Schema({
  src: String,

  type: String,
  name: String,
  status: String,
});

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);
export default Customer;
