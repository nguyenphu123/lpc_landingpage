import connectDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req, res) {
  const { searchField } = await req.json();
  try {
    await connectDB();
    const products = await Product.find({type:"Service"}, searchField);
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
