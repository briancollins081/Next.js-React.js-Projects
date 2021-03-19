import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      ) ||
      !name ||
      name.trim() === "" ||
      !message | (message.trim() === "")
    ) {
      res.status(422).json({ message: "Invalide Input" });
      return;
    }
    const newMessage = {
      name,
      email,
      message,
    };
    let client;
    try {
      client = await new MongoClient("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).connect();
    } catch (error) {
      res
        .status(500)
        .json({ message: "There was an error connecting to database!" });
      return;
    }
    if (client) {
      const db = client.db("nextjs-course-blog");
      try {
        const result = await db.collection("contactus").insertOne(newMessage);
        newMessage.id = result.insertedId;
      } catch (error) {
        res.status(500).json({ message: "Saving message failed!" });
        client.close();
        return;
      }
    }
    res
      .status(201)
      .json({ message: "Successfully send message!", data: newMessage });
  }
};
export default handler;
