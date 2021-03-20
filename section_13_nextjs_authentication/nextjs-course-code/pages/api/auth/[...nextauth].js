import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      authorize: async (credentials) => {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        if (!user) {
          throw new Error("User not found!");
          client.close();
        }

        const pwdIsValid = await verifyPassword(
          credentials.password,
          user.password
        );
        if (!pwdIsValid) {
          throw new Error("Invalid credentials, check your email/password");
          client.close();
        }
        client.close();
        return { email: user.email };
      },
    }),
  ],
});
