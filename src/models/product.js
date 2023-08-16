import mongoose from "mongoose";

const { Schema } = mongoose;

// Schema for description inside product content

const DescriptionSchema = new Schema({
  id: String,

  title: String,

  titleEn: String,

  content: String,

  contentEn: String,
});

// Schema for content inside product

const ProductContentSchema = new Schema({
  id: String,

  title: String,

  content: String,

  titleEn: String,

  contentEn: String,

  imgSrc: String,

  description: [DescriptionSchema],
});

// Schema for product

const ProductSchema = new Schema({
  title: String,

  titleEn: String,

  type: String,

  description1: String,

  description2: String,

  descriptionEn1: String,

  descriptionEn2: String,

  image: String,

  pros: [String],

  prosEn: [String],

  content: [ProductContentSchema],
});

// Kiểm tra trùng tên model "Product", nếu đã tồn tại thì sử dụng lại, ngược lại tạo mới

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
