import mongoose from "mongoose";

const { Schema } = mongoose;

const recruitBannerSchema = new Schema({
  title: String,
  titleEn: String,
  description: String,
  descriptionEn: String,
  numberOfRecruitment: String,
  numberOfRecruitmentEn: String,
  salary: String,
  salaryEn: String,
  status: String,
  src:String,
});

const RecruitBanner =
  mongoose.models.RecruitBanner ||
  mongoose.model("RecruitBanner", recruitBannerSchema);
export default RecruitBanner;
