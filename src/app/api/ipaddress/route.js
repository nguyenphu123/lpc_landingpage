import { NextResponse } from "next/server";
const address = require("address");
export async function POST(req, res) {
  return NextResponse.json({ ip: address.ip() });
}
