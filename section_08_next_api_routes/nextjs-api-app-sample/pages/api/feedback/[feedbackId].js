import { getFeedbackData, createFeedbackPath } from ".";
const handler = (req, res) => {
  const { feedbackId } = req.query;
  const data = getFeedbackData(createFeedbackPath());
  const selectedFeedback = data.find(
    (f) => f.id.toString() === feedbackId.toString()
  );
  res.status(200).json({ feedback: selectedFeedback });
};

export default handler;
