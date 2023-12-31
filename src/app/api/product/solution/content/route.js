import connectDB from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import decryptId from "../../../../../lib/utils/decrypt";
export async function POST(req, res) {
  const { _id, searchField } = await req.json();
  const decrypted = decryptId(_id); //decrypt id from parameter

  try {
    await connectDB(); //connect to database
    //get one content from database
    const products = await Product.findOne({ _id: decrypted }, searchField);
    return NextResponse.json({ products });
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
