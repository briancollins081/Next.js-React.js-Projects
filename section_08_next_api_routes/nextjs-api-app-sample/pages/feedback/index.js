import { useState } from "react";
import { getFeedbackData, createFeedbackPath } from "../api/feedback";

const Feedback = ({ feedbacks }) => {
  const [feedbackData, setFeedbackData] = useState();
  const handleShowFeedbackDetails = (e, id) => {
    fetch(`/api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeedbackData(data.feedback);
      });
  };
  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbacks.map((f) => (
          <li key={f.id}>
            {f.text}&nbsp;
            <button onClick={(e) => handleShowFeedbackDetails(e, f.id)}>
              show details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const data = getFeedbackData(createFeedbackPath());
  return {
    props: {
      feedbacks: data,
    },
  };
};

export default Feedback;
