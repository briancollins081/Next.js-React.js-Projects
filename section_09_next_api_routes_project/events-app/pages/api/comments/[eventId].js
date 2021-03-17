import { CONNECT_TO_CLIENT } from "../../../helpers/db-client";

const handler = async (req, res) => {
  const { client, db } = await CONNECT_TO_CLIENT();
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

      const result = await db
        .collection("events-comments")
        .insertOne(newComment);
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
      const comments = await db.collection("events-comments").find().toArray();
      console.log(JSON.stringify(comments));
      // client.close();
      res.status(200).json({
        message: "Comments",
        comments: comments,
      });
      break;
  }
  client.close();
};

export default handler;
