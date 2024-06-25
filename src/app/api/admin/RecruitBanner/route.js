import connectDB from "@/lib/mongodb";
import RecruitBanner from "@/models/recruit_banners";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function GET(request) {
  console.log(request.url);
  try {
    await connectDB(); //connect to database
    const recruitBanners = await RecruitBanner.find({}); //get all recruitBanners
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
export async function POST(req) {
  const {
    src,

    type,

    name,
    status,
  } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      await connectDB(); //connect to database
      //create a record
      await RecruitBanner.create({
        src,

        type,

        name,
        status,
      });
      return NextResponse.json({
        msg: ["Recruit Banner Added"],
        success: true,
      });
    } else {
      //session not exist
      return NextResponse.json({
        msg: ["You are not allowed to perform this action."],
      });
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      // console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: error });
    }
  }
}
//update a partner
export async function PUT(req) {
  const {
    _id,
    src,

    type,

    name,
    status,
  } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      await connectDB(); //connect to database
      //update a record
      await RecruitBanner.findOneAndUpdate(
        { _id: _id },
        {
          src,

          type,

          name,
          status,
        },
        { new: true },
      );
      return NextResponse.json({
        msg: ["Recruit Banner updated"],
        success: true,
      });
    } else {
      //session not exist
      return NextResponse.json({
        msg: ["You are not allowed to perform this action."],
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
      return NextResponse.json({ msg: [error] });
    }
  }
}
