import mongoose from "mongoose";

const { Schema } = mongoose;

const recruitBannerSchema = new Schema({
  src: String,

  type: String,

  name: String,
  status: String,
});

const RecruitBanner =
  mongoose.models.RecruitBanner || mongoose.model("RecruitBanner", recruitBannerSchema);
export default RecruitBanner;