import { getSession } from "next-auth/client";
import { hashPassword, verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
const handler = async (req, res) => {
  if (req.method !== "PATCH") {
    return;
  }
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Not authenticated!" });
  }

  const userEmail = session.user.email;
  const { oldpassword, newpassword } = req.body;
  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  const existingUser = await usersCollection.findOne({ email: userEmail });
  if (!existingUser) {
    client.close();
    return res.status(404).json({ message: "User not found!" });
  }
  const currentPassword = existingUser.password;
  const matchedPass = await verifyPassword(oldpassword, currentPassword);
  if (!matchedPass) {
    client.close();
    res.status(403).json({ message: "Current password do not match!" });
  }
  const hPassword = await hashPassword(newpassword);
  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hPassword } }
  );
  client.close();
  res.status(200).json({ message: "Password updated successfully!" });
};

export default handler;
