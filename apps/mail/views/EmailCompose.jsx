const { Link } = ReactRouterDOM;

const { useState, useEffect } = React;
import { ComposeToolbar } from "../cmps/ComposeToolbar.jsx";
import { emailService } from "../services/mail.service.js";
export function EmailCompose({ setIsComposeShown, sendTo }) {
  const [to, setTo] = useState(sendTo);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleToChange = (event) => setTo(event.target.value);
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleSubjectChange = (event) => setContent(event.target.value);

  const handleSend = () => {
    if (!checkIfValid()) return;

    const email = emailService.getEmptyEmail();
    email.from = emailService.getLoggedInUser().email;
    email.to = to;
    email.subject = title;
    email.body = content;
    email.sentAt = Date.now();

    emailService.save(email);

    setTo("");
    setTitle("");
    setContent("");
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function checkIfValid() {
    if (!isEmailValid(to)) {
      alert("Mail is not valid!");
      return false;
    } else if (!title) {
      alert("Please enter a title!");
      return false;
    } else if (!content) {
      alert("Please enter a content!");
      return false;
    }
    return true;
  }

  return (
    <section className="compose">
      <ComposeToolbar setIsComposeShown={setIsComposeShown} />
      <form className="main-compose">
        <input
          type="text"
          id="to"
          name="to"
          placeholder="To"
          value={to}
          onChange={handleToChange}
        />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          id="content"
          name="content"
          placeholder="Write your Email"
          rows="4"
          value={content}
          onChange={handleSubjectChange}
        ></textarea>
        <button className="send-button" type="button" onClick={handleSend}>
          Send
        </button>
      </form>
    </section>
  );
}
