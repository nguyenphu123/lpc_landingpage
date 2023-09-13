import connectDB from "@/lib/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
export async function POST(req, res) {
  const { name, email, message } = await req.json();
  try {
    await connectDB(); //connect to database
    //create a record
    const messages = await Message.create({ name, email, message });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: error });
    }
  }
  //message format for guest
  const mess = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: email,
    subject: `you have received a message from ${process.env.GMAIL_EMAIL_ADDRESS}`,
    text: `<html><p>We have received your email</p></html>`,
    html: `<html><p>We have received your email</p></html>`,
  };
  //message format for company receiver
  const mess2 = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: `you have received a message from ${name}`,
    text: `<html><p>${message}</p>from ${email}</html>`,
    html: `<html><p>${message}</p>from ${email}</html>`,
  };
  //create a mail transport
  let transporter = nodemailer.createTransport(
    smtpTransport({
      host: "smtp-mail.outlook.com",
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      auth: {
        user: "info@lp.com.vn",
        pass: "jzzsqmcgycxbylvs",
      },
      tls: {
        ciphers: "SSLv3",
      },
    }),
  );

  try {
    //send email
    const res = await transporter.sendMail(mess);
    const res2 = await transporter.sendMail(mess2);
    // return res.status(200).json({ success: true });
  } catch (err) {}
  return NextResponse.json({
    msg: ["Message sent successfully"],
    success: true,
  });
}
