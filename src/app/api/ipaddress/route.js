import { NextResponse } from "next/server";

import arp from "@network-utils/arp-lookup";
export async function POST(req, res) {
  // let ip = headers().get("x-forwarded-for");
  // let ip2 = headers().get("x-real-ip");
  let results = await arp.getTable();
  return NextResponse.json(results);
}
