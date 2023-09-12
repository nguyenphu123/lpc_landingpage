import connectDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
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
  const session = await getServerSession({ req });
  try {
    if (session) {
      await connectDB();

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
    }
    return NextResponse.json({
      msg: ["Product added"],
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
  const session = await getServerSession({ req });
  try {
    if (session != undefined) {
      await connectDB();
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
    }
    return NextResponse.json({
      msg: ["Product updated"],
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
