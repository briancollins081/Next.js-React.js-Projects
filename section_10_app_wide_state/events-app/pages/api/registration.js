import { CONNECT_TO_CLIENT, insertDocument } from "../../helpers/db-client";

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      const { email } = req.body;
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ) {
        return res.status(422).json({ message: "Invalid email" });
      }
      let client, db;
      try {
        const connection = await CONNECT_TO_CLIENT();
        client = connection.client;
        db = connection.db;
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error conecting to database!" });
      }

      try {
        // await db.collection("emails").insertOne({ email });
        insertDocument(db, "emails", { email });
        client.close();
      } catch (error) {
        return res.status(500).json({ message: "Error inserting document!" });
      }

      res.status(201).json({
        message: "Registration successful",
      });
      break;
    //get
    default:
      res.status(200).json({
        message: "Registration emails",
        data: ["briancollins081@gmail.com"],
      });
      break;
  }
};

export default handler;
