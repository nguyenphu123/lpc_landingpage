import connectDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
//update a content
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
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session != undefined) {
      //check session
      await connectDB(); //connect to database
      //update a record
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
            "content.$[content].status": status,
          },
        },
        { arrayFilters: [{ "content._id": contentId }] },
      );
      return NextResponse.json({
        msg: ["Content updated"],
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
      return NextResponse.json({ msg: error });
    }
  }
}
//add a new content to product
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
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session != undefined) {
      //check session
      await connectDB(); //connect to database
      //create a record
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
      return NextResponse.json({
        msg: ["Content created"],
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
      return NextResponse.json({ msg: error });
    }
  }
}
