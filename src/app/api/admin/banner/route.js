import connectDB from "@/lib/mongodb";
import Banner from "@/models/banner";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function POST(req) {
  const {
    title,

    titleEn,

    content,

    contentEn,

    image,
    session,
  } = await req.json();

  try {
    if (session != undefined) {
      await connectDB();

      await Banner.create({
        title,

        titleEn,

        content,

        contentEn,

        image,
      });
    }

    return NextResponse.json({
      msg: ["Message sent successfully"],
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
    session,
  } = await req.json();

  try {
    if (session != undefined) {
      await connectDB();

      await Banner.findOneAndUpdate(
        { _id: _id },
        {
          title,

          titleEn,

          content,

          contentEn,

          image,
        },
        { new: true },
      );
    }
    return NextResponse.json({
      msg: ["Message sent successfully"],
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
