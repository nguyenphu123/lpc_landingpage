import connectDB from "@/lib/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
//update company contact information
export async function PUT(req) {
  const {
    _id,
    address,

    addressEn,

    addressLink,

    email,

    phoneNumber,

    linkWebsite,

    socialAccount,
  } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      await connectDB(); //connect to database
      //update a record
      await Contact.findOneAndUpdate(
        { _id: _id },
        {
          address,

          addressEn,

          addressLink,

          email,

          phoneNumber,

          linkWebsite,

          socialAccount,
        },
        { new: true },
      );
      return NextResponse.json({
        msg: ["Update information successfully"],
        success: true,
      });
    } else {
      //session not exist
      return NextResponse.json({
        msg: ["Permission denied"],
      });
    }
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
}
