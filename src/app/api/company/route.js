import connectDB from "@/lib/mongodb";
import Company from "@/models/company";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function GET(request) {
  console.log(request.url);
  try {
    await connectDB();
    const company = await Company.find(
      {},
      {
        companyName: 1,
        companyDescription: 1,
        companyDescriptionEn: 1,
        companyCore: 1,
        companyCoreEn: 1,
        companyImage: 1,
      },
    );
    return NextResponse.json({ company });
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
