import connectDB from "@/lib/mongodb";
import Banner from "@/models/banner";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
export async function POST(req) {
  const {
    title,

    titleEn,

    content,

    contentEn,

    image,
    status,
  } = await req.json();
  const session = await getServerSession({ req });
  try {
    if (session) {
      await connectDB();

      await Banner.create({
        title,

        titleEn,

        content,

        contentEn,

        image,
        status,
      });
    }

    return NextResponse.json({
      msg: ["Add banner successfully"],
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
  const session = await getServerSession({ req });
  try {
    if (session) {
      await connectDB();

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
    }
    return NextResponse.json({
      msg: ["Update banner successfully"],
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
