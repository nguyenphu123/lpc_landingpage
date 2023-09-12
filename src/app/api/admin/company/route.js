import connectDB from "@/lib/mongodb";
import Company from "@/models/company";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
export async function PUT(req) {
  const {
    _id,
    companyName,

    companyDescription,

    companyDescriptionEn,

    companyCore,

    companyCoreEn,

    companyAddress,

    companySocialAccount,

    companyContact,

    companyWebsite,

    companyImage,
  } = await req.json();
  const session = await getServerSession({ req });
  try {
    if (session) {
      await connectDB();

      await Company.findOneAndUpdate(
        { _id: _id },
        {
          companyName,

          companyDescription,

          companyDescriptionEn,

          companyCore,

          companyCoreEn,

          companyAddress,

          companySocialAccount,

          companyContact,

          companyWebsite,

          companyImage,
        },
        { new: true },
      );
    }

    return NextResponse.json({
      msg: ["Update information successfully"],
      success: true,
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
}
