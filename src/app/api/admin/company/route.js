import connectDB from "@/lib/mongodb";
import Company from "@/models/company";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
//update company information
export async function PUT(req) {
  const {
    _id,
    companyName,

    companyDescription,

    companyDescriptionEn,

    companyCore,

    companyCoreEn,
  } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      await connectDB(); //connect to database
      //update a record
      await Company.findOneAndUpdate(
        { _id: _id },
        {
          companyName,

          companyDescription,

          companyDescriptionEn,

          companyCore,

          companyCoreEn,
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
