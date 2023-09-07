import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  let ip = headers().get("x-forwarded-for");

  return NextResponse.json({ ip: ip });
}
