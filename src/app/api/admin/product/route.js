import connectDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
//create a product
export async function POST(req) {
  const {
    title,

    titleEn,

    type,

    description1,

    description2,

    descriptionEn1,

    descriptionEn2,

    image,

    pros,

    prosEn,

    content,
    status,
  } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session) {
      //check session
      await connectDB(); //connect to database
      //create a product
      await Product.create({
        title,

        titleEn,

        type,

        description1,

        description2,

        descriptionEn1,

        descriptionEn2,

        image,

        pros,

        prosEn,

        content,
        status,
      });
      return NextResponse.json({
        msg: ["Product added"],
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
//update a product
export async function PUT(req) {
  const {
    _id,
    title,

    titleEn,

    type,

    description1,

    description2,

    descriptionEn1,

    descriptionEn2,

    image,

    pros,

    prosEn,
    status,
  } = await req.json();
  const session = await getServerSession({ req }); //get server side session
  try {
    if (session != undefined) {
      //check session
      await connectDB(); //connect to database
      //update a product
      await Product.findOneAndUpdate(
        { _id: _id },
        {
          title,

          titleEn,

          type,

          description1,

          description2,

          descriptionEn1,

          descriptionEn2,

          image,

          pros,

          prosEn,
          status,
        },
        { new: true },
      );
      return NextResponse.json({
        msg: ["Product updated"],
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
