import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/loginAuth";
const handler = NextAuth(authOptions);//get authenticate option

export { handler as GET, handler as POST };
