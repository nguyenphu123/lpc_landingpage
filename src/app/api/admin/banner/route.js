import connectDB from "@/lib/mongodb";
import Banner from "@/models/banner";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
//create a banner
export async function POST(req) {
  const {
    title,

    titleEn,

    content,

    contentEn,

    image,
    status,
  } = await req.json();
  const session = await getServerSession({ req }); //get session in server side
  try {
    if (session) {
      //check session
      await connectDB(); //connect database
      //create a new record
      await Banner.create({
        title,

        titleEn,

        content,

        contentEn,

        image,
        status,
      });
      //return success
      return NextResponse.json({
        msg: ["Add banner successfully"],
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
//update a banner
export async function PUT(req) {
  const {
    _id,
    title,

    titleEn,

    content,

    contentEn,

    image,
    status,
  } = await req.json();
  const session = await getServerSession({ req }); //get session in server side
  try {
    if (session) {
      //check session
      await connectDB(); //connect database
      //update a record
      await Banner.findOneAndUpdate(
        { _id: _id },
        {
          title,

          titleEn,

          content,

          contentEn,

          image,
          status,
        },
        { new: true },
      );
      return NextResponse.json({
        msg: ["Update banner successfully"],
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
