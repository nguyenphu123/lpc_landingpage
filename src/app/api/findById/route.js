import connectDB from "@/lib/mongodb";
import New from "@/models/new";
import Company from "@/models/company";
import Customer from "@/models/customer";
import Partner from "@/models/partner";
import Product from "@/models/product";
import User from "@/models/user";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function POST(req) {
  const { _id, schema } = await req.json();
  try {
    await connectDB();
    let data;
    if (schema == "New") {
      data = await New.findOne({ _id: _id });
    } else if (data == "Product") {
      data = await Product.findOne({ _id: _id });
    }

    return NextResponse.json({ data });
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
