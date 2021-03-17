import { useEffect, useState, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import NotificationContext from "../../store/NotificationContext";

import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;
  useEffect(() => {
    displayComments();
  }, [eventId]);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [lodingComment, setLoadingComments] = useState(false);

  const notificationCtx = useContext(NotificationContext);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData) => {
    notificationCtx.showNotification({
      title: "Comenting on the Event...",
      message: "Creating new comment on the current event",
      status: "pending",
    });
    // send data to API
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(
              data.message ||
                "An error occurred during creation of your comment"
            );
          });
        }
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Event comment success",
          message: "Successfully created event comment!",
          status: "success",
        });
        displayComments();
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Event Comment Error",
          message: "Failed creating event due to an error: " + err.message,
          status: "error",
        });
      });
    const timer = setTimeout(() => {
      notificationCtx.hideNotification();
      clearTimeout(timer);
    }, 3000);
  };

  const displayComments = () => {
    setLoadingComments(true);
    fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log({ data });
        // setShowComments(true);
        setComments(data.comments);
        const timer = setTimeout(() => {
          setLoadingComments(false);
          clearTimeout(timer);
        }, 8000);
      });
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {lodingComment && showComments ? (
        <p>Fetching comments...</p>
      ) : (
        <>
          {showComments && <NewComment onAddComment={addCommentHandler} />}
          {showComments && <CommentList list={comments} />}
        </>
      )}
    </section>
  );
}

export default Comments;
