import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 8
    ) {
      res.status(422).json({
        message:
          "Invalid signup data - ensure you provide a valid email and at least an 8 character password.",
      });
      return;
    }
    const client = await connectToDatabase();
    const db = client.db();
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return res
        .status(422)
        .json({ message: "Email provided already exists!" });
    }
    const hPassword = await hashPassword(password);
    const result = await db
      .collection("users")
      .insertOne({ email, password: hPassword });
    res.status(201).json({ message: "Created user!" });
  }
};

export default handler;
