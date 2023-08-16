import mongoose, { Schema } from "mongoose";

const newSchema = new Schema({
  id: String,
  title: String,
  titleEn: String,
  meta_title: String,
  description: String,
  date: String,
  image: String,
  categories: [String],
  tags: [String],
  draft: Boolean,
  content: String,
  contentEn: String,
});
const New = mongoose.models.New || mongoose.model("New", newSchema);

export default New;
