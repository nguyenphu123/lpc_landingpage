import mongoose from "mongoose";

const { Schema } = mongoose;

const bannerSchema = new Schema({
  title: String,

  titleEn: String,

  content: String,

  contentEn: String,

  image: String,
  status: String,
});

const Banner = mongoose.models.Banner || mongoose.model("Banner", bannerSchema);
export default Banner;
