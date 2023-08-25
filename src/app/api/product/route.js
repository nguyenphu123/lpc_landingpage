import connectDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
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
  } = await req.json();

  try {
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
    });

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

    type,

    description1,

    description2,

    descriptionEn1,

    descriptionEn2,

    image,

    pros,

    prosEn,

    content,
  } = await req.json();

  try {
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

        content,
      },
      { new: true },
    );

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
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json({ products });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
