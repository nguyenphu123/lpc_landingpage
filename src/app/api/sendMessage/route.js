import connectDB from "@/lib/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
const nodemailer = require("nodemailer");
const email = process.env.GMAIL_EMAIL_ADDRESS;
export const mailOptions = {
  from: email,
  to: email,
};
export async function POST(req, res) {
  const {
    name,

    email,

    message,
  } = await req.json();
  try {
    await connectDB();

    await Message.create({
      name,

      email,

      message,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      // console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
  const mess = {
    from: email,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: name,
    text: message,
    html: `<p>${message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "phunguyen12111998@gmail.com",
      pass: "lhxeqazhutcfxcrf",
    },
  });

  try {
    const res = await transporter.sendMail({
      ...mailOptions,
      mess,
      subject: mess,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({
    msg: ["Message sent successfully"],
    success: true,
  });
}
export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find({});
    return NextResponse.json({ messages });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
