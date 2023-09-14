import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema({
  name: String,

  email: String,

  message: String,

  phoneNumber: String,
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
