import fs from "fs";
import path from "path";

export const createFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

export const getFeedbackData = (filePath) => {
  const fileData = fs.readFileSync(filePath, { encoding: "utf-8" });
  return JSON.parse(fileData);
};

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, text } = req.body;
    const feedback = {
      id: new Date().getTime(),
      email,
      text,
    };
    // save the data
    const filePath = createFeedbackPath();
    const data = getFeedbackData(filePath);
    data.push(feedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Successfully added feedback!", feedback });
  } else {
    const data = getFeedbackData(createFeedbackPath());
    res.status(200).json({ feedbacks: data });
  }
};

export default handler;
