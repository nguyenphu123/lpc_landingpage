import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
var bcrypt = require("bcryptjs");
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        const user = {
          _id: "",
          email: "",
          role: "",
          loginCount: "",
        };
        try {
          await connectDB();

          const returnData = await User.findOne({ email, status: "Active" });
          user._id = returnData._id;
          user.email = returnData.email;
          user.role = returnData.role;
          user.loginCount = returnData.loginCount;
          if (!user) {
            return null;
          }

          if (!(password == returnData.password)) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 60 * 60 * 60,
  },
  jwt: {
    maxAge: 60 * 60 * 60, // Time in seconds, similar to have you have configured it in the userFlow in Azure AD B2C
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};
