import { useRef, useState } from "react";

const HomePage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [emailRef, feedbackRef] = [useRef(), useRef()];
  const submitFormHandler = (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const feedbackValue = feedbackRef.current.value;
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email: emailValue, text: feedbackValue }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleLoadFeedback = () => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data.feedbacks);
      });
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            ref={emailRef}
            id="email"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="Feedback">Feedback</label>
          <textarea
            name="feedback"
            ref={feedbackRef}
            id="feedback"
            rows="6"
          ></textarea>
        </div>
        <div>
          <button type="submit">Send Feedback</button>
        </div>
      </form>
      <hr />
      <button onClick={handleLoadFeedback}>Load Feedbacks</button>
      <ul>
        {feedbacks.map((f) => (
          <li key={f.id}>{f.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
