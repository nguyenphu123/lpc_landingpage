import connectDB from "@/lib/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
export async function POST(req, res) {
  const { name, email, phoneNumber, message } = await req.json();
  try {
    await connectDB(); //connect to database
    //create a record
    const messages = await Message.create({
      name,
      email,
      phoneNumber,
      message,
    });
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
    text: `<p dir="ltr">Dear Mr/Ms ${name}</p>
    <p dir="ltr">&nbsp;</p>
    <p dir="ltr">We have received your email</p>
    <p dir="ltr">Our employees will contact you as soon as possible</p>
    <p dir="ltr">Have a nice day</p>
    <p dir="ltr">Lpc</p>
    <p dir="ltr">___________________</p>
    <p dir="ltr">Lpc</p>
    <p dir="ltr">M: (+84) 28 3821 66 88, (+84) 28 3821 66 84| E: info@lp.com.vn</p>
    <p dir="ltr"><img src="https://lh6.googleusercontent.com/8tzp7o8wMyfhovRx3Hujxrv9EfpOzssl3C_9VQeKL-iYxQVmORApMG6JgT2Dfti956n69SnH2H8-QUti-pqhiHi6oY4dTrxB1wo6AgCgr3hmFzYFeEzgAwwRigoYpByMoFY0yKBvNy0nQjYI-befZBQ" width="624" height="95"></p>
    <p>&nbsp;</p>`,
    html: `<html><p dir="ltr">Dear Mr/Ms${name}</p>
    <p dir="ltr">&nbsp;</p>
    <p dir="ltr">We have received your email</p>
    <p dir="ltr">Our employees will contact you as soon as possible</p>
    <p dir="ltr">Have a nice day</p>
    <p dir="ltr">Lpc</p>
    <p dir="ltr">___________________</p>
    <p dir="ltr">Lpc</p>
    <p dir="ltr">M: (+84) 28 3821 66 88, (+84) 28 3821 66 84| E: info@lp.com.vn</p>
    <p dir="ltr"><img src="https://lh6.googleusercontent.com/8tzp7o8wMyfhovRx3Hujxrv9EfpOzssl3C_9VQeKL-iYxQVmORApMG6JgT2Dfti956n69SnH2H8-QUti-pqhiHi6oY4dTrxB1wo6AgCgr3hmFzYFeEzgAwwRigoYpByMoFY0yKBvNy0nQjYI-befZBQ" width="624" height="95"></p>
    <p>&nbsp;</p></html>`,
  };
  //message format for company receiver
  const mess2 = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: `you have received a message from ${name}`,
    text: `<html><p dir="ltr">Dear Lpc</p>
    <p dir="ltr">&nbsp;</p>
    <p dir="ltr">My name is:${name}</p>
    <p dir="ltr">I am contacting you in purpose of:</p>
    <p dir="ltr">${message}</p>
    <p dir="ltr">&nbsp;</p>
    <p dir="ltr">Have a nice day</p>
    <p dir="ltr">${name}</p>
    <p dir="ltr">___________________</p>
    <p dir="ltr">${name}</p>
    <p dir="ltr">M: (+84) ${phoneNumber}| E: ${email}</p>
    
    <p>&nbsp;</p></html>`,
    html: `<html><p dir="ltr">Dear Lpc</p>
    <p dir="ltr">&nbsp;</p>
    <p dir="ltr">My name is:${name}</p>
    <p dir="ltr">I am contacting you in purpose of:</p>
    <p dir="ltr">${message}</p>
    <p dir="ltr">&nbsp;</p>
    <p dir="ltr">Have a nice day</p>
    <p dir="ltr">${name}</p>
    <p dir="ltr">___________________</p>
    <p dir="ltr">${name}</p>
    <p dir="ltr">M: (+84) ${phoneNumber}| E: ${email}</p>
    
    <p>&nbsp;</p></html>`,
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
