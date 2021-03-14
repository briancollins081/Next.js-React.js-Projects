import { getFeedbackData, createFeedbackPath } from "../api/feedback";

const Feedback = ({ feedbacks }) => {
  return (
    <div>
      <ul>
        {feedbacks.map((f) => (
          <li key={f.id}>{f.text}</li>
        ))}
      </ul>
    </div>
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
