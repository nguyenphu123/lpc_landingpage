import mongoose from "mongoose";

const { Schema } = mongoose;
const companySchema = new Schema({
  companyName: String,

  companyDescription: {
    content: String,

    image: String,
  },

  companyDescriptionEn: {
    content: String,

    image: String,
  },

  companyCore: {
    content: String,

    image: String,
  },

  companyCoreEn: {
    content: String,

    image: String,
  },
});
const Company =
  mongoose.models.Company || mongoose.model("Company", companySchema);
export default Company;
