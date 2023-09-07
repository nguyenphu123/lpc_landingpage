import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req, res) {
  let ip = headers().get("x-forwarded-for");
  let ip2 = headers().get("x-real-ip");

  return NextResponse.json({ ip: ip, ip2: ip2 });
}
