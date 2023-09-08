import connectDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function PUT(req) {
  const {
    _id,
    contentId,
    title,

    titleEn,

    contentEn,

    content,

    description,

    descriptionEn,

    imgSrc,
    status,
  } = await req.json();
  const session = await getServerSession({ req });
  try {
    if (session != undefined) {
      await connectDB();
      await Product.updateOne(
        { _id: _id },
        {
          $set: {
            "content.$[content].title": title,
            "content.$[content].titleEn": titleEn,
            "content.$[content].content": content,
            "content.$[content].contentEn": contentEn,
            "content.$[content].description": description,
            "content.$[content].descriptionEn": descriptionEn,
            "content.$[content].imgSrc": imgSrc,
            "content.$[content].imgSrc": status,
          },
        },
        { arrayFilters: [{ "content._id": contentId }] },
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
      return NextResponse.json({ msg: error });
    }
  }
}
export async function POST(req) {
  const {
    _id,

    title,

    titleEn,

    contentEn,

    content,

    description,

    descriptionEn,

    imgSrc,
  } = await req.json();
  const session = await getServerSession({ req });
  try {
    if (session != undefined) {
      await connectDB();
      await Product.updateOne(
        { _id: _id },
        {
          $push: {
            content: {
              title: title,
              titleEn: titleEn,
              content: content,
              contentEn: contentEn,
              description: description,
              descriptionEn: descriptionEn,
              imgSrc: imgSrc,
              status: "Active",
            },
          },
        },
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
      return NextResponse.json({ msg: error });
    }
  }
}
