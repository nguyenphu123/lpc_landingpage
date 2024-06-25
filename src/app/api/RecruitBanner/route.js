import connectDB from "@/lib/mongodb";
import RecruitBanner from "@/models/recruit_banners";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function GET(request) {
  console.log(request.url);
  try {
    await connectDB(); //connect to database
    const recruitBanners = await RecruitBanner.find({status:"Active"}); //get all recruitBanners
    return NextResponse.json({ recruitBanners });
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
