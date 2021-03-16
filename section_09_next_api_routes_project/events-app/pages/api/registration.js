const handler = (req, res) => {
  switch (req.method) {
    case "POST":
      const { email } = req.body;
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        )
      ){
        return res.status(422).json({message: "Invalid email"})
      }
      res.status(201).json({
        message: "Registration successful",
      });
      break;
    //get
    default:
      res
        .status(200)
        .json({
          message: "Registration emails",
          data: ["briancollins081@gmail.com"],
        });
      break;
  }
};

export default handler;
