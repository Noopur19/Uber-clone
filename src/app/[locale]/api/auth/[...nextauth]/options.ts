import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProviders from "next-auth/providers/credentials";
import { connectToDataBase } from "@/lib/db";
import { User } from "@/models/user";
import { comparePassword } from "@/lib/utility";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProviders({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        // retrieve user data to verify credentials
        const { email, password } = credentials;
        try {
          await connectToDataBase();
          const user: any = await User.findOne({ email });
          const isMatch = await comparePassword(password, user.password);
          console.log(isMatch,'isMatch')
          if (!user || !password || user.password !== password) {
            return null;
          }
          console.log(user, "user");
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.name = user.username;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub; // token.uid or token.sub both work
      }
      return session;
    },
  },
};
