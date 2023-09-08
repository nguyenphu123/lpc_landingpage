import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  // let ip = headers().get("x-forwarded-for");
  // let ip2 = headers().get("x-real-ip");
  const os = require("os");
  return NextResponse.json(os.networkInterfaces());
}
