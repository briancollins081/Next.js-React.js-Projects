const COMMENTS = [];
const handler = (req, res) => {
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
        id: new Date().getTime().toString(),
        eventId,
        comment,
        author: { email, name },
      };
      COMMENTS.push(newComment);
      console.log({ comment, email, name });
      res.status(201).json({
        message: "Comment was successful",
        comment: newComment,
      });
      break;
    //get req
    case "GET":
      res.status(200).json({
        message: "Comments",
        comments: COMMENTS,
      });
      break;
  }
};

export default handler;
