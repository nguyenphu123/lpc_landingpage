import mongoose from "mongoose";

const { Schema } = mongoose;

const partnerSchema = new Schema({
  src: String,

  type: String,

  name: String,
});

const Partner =
  mongoose.models.Partner || mongoose.model("Partner", partnerSchema);
export default Partner;
