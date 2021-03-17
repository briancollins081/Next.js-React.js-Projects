import { useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;
  useEffect(() => {
    displayComments();
  }, [eventId]);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData) => {
    // send data to API
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        displayComments();
      });
  };

  const displayComments = () => {
    fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        // setShowComments(true);
        setComments(data.comments);
      });
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList list={comments} />}
    </section>
  );
}

export default Comments;
