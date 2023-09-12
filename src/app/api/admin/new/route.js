import connectDB from "@/lib/mongodb";
import New from "@/models/new";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
export async function POST(req) {
  const {
    title,

    titleEn,

    meta_title,

    description,

    date,
    categories,
    tags,
    image,

    draft,

    content,

    contentEn,
  } = await req.json();
  const session = await getServerSession({ req });
  try {
    if (session) {
      await connectDB();

      await New.create({
        title,

        titleEn,

        meta_title,

        description,

        date,

        image,

        categories,
        tags,

        draft,

        content,

        contentEn,
      });
    }
    return NextResponse.json({
      msg: ["An article created successfully"],
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

    meta_title,

    description,

    date,
    categories,
    tags,
    image,

    draft,

    content,

    contentEn,
  } = await req.json();
  const session = await getServerSession({ req });
  try {
    if (session) {
      await connectDB();

      await New.findOneAndUpdate(
        { _id: _id },
        {
          title,

          titleEn,

          meta_title,

          description,

          date,
          categories,
          tags,
          image,

          draft,

          content,

          contentEn,
        },
        { new: true },
      );
    }
    return NextResponse.json({
      msg: ["Article updated"],
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
