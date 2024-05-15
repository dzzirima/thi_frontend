import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "@/app/authconfig";
import axios from "axios";
import jwt from "jsonwebtoken";
import email from "next-auth/providers/email";

const login = async (credentials) => {

  
  try {
   
    let loginRes = await axios.post(`${process.env.API_URL}/auth/authenticate`, {
      email: credentials.userName,
      password: credentials.password,

      // "email":"crm@gmail.com",
      // "password":"crm"
    });

 

    let { token } = loginRes.data;
    let userData = loginRes.data.data



    var decoded = await jwt.decode(token);

    let user = { ...userData, token: token };

    // return user;

    if(loginRes.status == 200){

      return user;
    }else{
      throw new Error("Failed to login")
    }

    // if (!user || !user.isAdmin) throw new Error("Wrong credentials!");


  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
});
