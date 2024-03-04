import NextAuth from "next-auth";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/lib/mongodb";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return {
            email: user.email,
            name: user.name,
            id: user._id.toString(),
          };
        } catch (error) {
          console.log("Error: ", error);
          throw error; // Rethrow the error to be caught by NextAuth.js
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session) {
        return {
          ...token,
          name: session?.user.name,
        };
      }
      if (user) {
        return {
          ...token,
          role: user.role,
          id: user.id,
        };
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id, // Use the id from the token
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/", // Update this to your sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
