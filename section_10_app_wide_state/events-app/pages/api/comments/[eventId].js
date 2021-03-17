import {
  CONNECT_TO_CLIENT,
  findDocuments,
  insertDocument,
} from "../../../helpers/db-client";

const handler = async (req, res) => {
  let client, db;
  try {
    const connection = await CONNECT_TO_CLIENT();
    client = connection.client;
    db = connection.db;
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Connection to the database failed!" });
  }
  const { eventId } = req.query;
  switch (req.method) {
    case "POST":
      const { comment, email, name } = req.body;
      if (
        !comment ||
        comment.trim() === "" ||
        !email ||
        !email.includes("@") ||
        !comment ||
        comment.trim() === ""
      ) {
        return res.status(422).json({ message: "Invalid data" });
      }
      const newComment = {
        // id: new Date().getTime().toString(),
        eventId,
        comment,
        author: { email, name },
      };
      let result;
      try {
        result = await insertDocument(db, "events-comments", newComment);
        // await db
        //   .collection("events-comments")
        //   .insertOne(newComment);
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Failed inserting new comment!" });
      }

      newComment.id = result.insertedId;
      console.log({ newComment });
      // client.close();

      res.status(201).json({
        message: "Comment was successful",
        comment: newComment,
      });
      break;
    //get req
    case "GET":
      let comments;
      try {
        comments = await findDocuments(db, "events-comments", { eventId }, -1);
        // await db.collection("").find({ eventId }).sort({ _id: -1 }).toArray();
        // client.close();
      } catch (error) {
        return res.status(500).json({ message: "Fetching documents failed!" });
      }

      res.status(200).json({
        message: "Comments",
        comments: comments,
      });
      break;
  }
  // client.close();
};

export default handler;
