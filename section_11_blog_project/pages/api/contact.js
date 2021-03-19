const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      ) ||
      !name ||
      name.trim() === "" ||
      !message | (message.trim() === "")
    ) {
      res.status(422).json({ message: "Invalide Input" });
      return;
    }
    const newMessage = {
      name,
      email,
      message,
    };
    console.log(newMessage);
    res.status(201).json({ message: "Successfully send message!" });
  }
};
export default handler;
