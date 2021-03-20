import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, image, address, description } = req.body;
    const client = await MongoClient.connect(
      `mongodb+srv://andere:TXpNi42JMj6aCIXZ@cluster0.l4l3f.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({
      title,
      image,
      address,
      description,
    });
    console.log({ result });
    // client.close();
    res.status(201).json({ message: "Meetup created successfully!" });
  }
};

export default handler;
