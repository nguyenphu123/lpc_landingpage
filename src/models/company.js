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

  companyAddress: {
    address: [
      {
        content: String,

        contentEn: String,

        title: String,
      },
    ],

    addressLink: {
      content: String,

      title: String,
    },
  },

  companySocialAccount: [
    {
      platform: String,

      link: String,
    },
  ],

  companyContact: [{ typeOfContact: String, contentOfContact: String }],

  companyWebsite: String,

  companyImage: [{ type: String, src: String }],
});
const Company =
  mongoose.models.Company || mongoose.model("Company", companySchema);
export default Company;
