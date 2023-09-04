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
          password: "",
        };
        try {
          await connectDB();

          const returnData = await User.findOne({ email });
          user._id = returnData._id;
          user.email = returnData.email;
          user.password = returnData.password;
          if (!user) {
            return null;
          }

          // const passwordsMatch = await bcrypt.compare(password, user.password);
          var salt = bcrypt.genSaltSync(10);

          if (!(password == bcrypt.hash(user.password, salt))) {
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
