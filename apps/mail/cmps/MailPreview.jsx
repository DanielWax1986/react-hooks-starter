import { LongTxt } from "../cmps/LongTxt.jsx";
const { useState, useEffect } = React;
import { emailService } from "../services/mail.service.js";
const { Link } = ReactRouterDOM;

export function MailPreview({ email, onRemoveMail, setIsComposeShown }) {
  const [isRead, setIsRead] = useState("");
  const [isImportant, setIsImportant] = useState("fa-regular fa-star");

  function onToggleCompose() {
    setIsComposeShown((prev) => ({
      ...prev,
      sendTo: email.from,
      isShown: !prev.isShown,
    }));
  }

  useEffect(() => {
    if (email.isRead === true) {
      setIsRead("read-email");
    } else setIsRead("");
    if (email.important) setIsImportant("fa-solid fa-star");
  }, []);

  function handleReadCheckbox() {
    email.isRead = !email.isRead;
    emailService.save(email);

    if (email.isRead === true) {
      setIsRead("read-email");
    } else setIsRead("");
  }

  function setAsRead() {
    email.isRead = true;
    emailService.save(email);
  }

  function setImportant() {
    email.important = !email.important;
    setIsImportant(email.important ? "fa-solid fa-star" : "fa-regular fa-star");

    emailService.save(email);
  }

  return (
    <tr className={"email-preview " + isRead}>
      <td className="from">
        <input
          checked={email.isRead}
          onChange={handleReadCheckbox}
          type="checkBox"
          id="isRead"
          name="isRead"
        />
        <button onClick={setImportant} className="star-btn">
        <i className={`fa ${isImportant} fa-star`} style={{ color: isImportant === "fa-solid fa-star" ? 'gold' : 'black' }}></i>
        </button>
        {email.from}
      </td>
      <td className="subject">{email.subject}</td>
      <td className="content">
        <LongTxt txt={email.body} />
      </td>
      <td className="date">
        {email.sentAt && emailService.getDate(email.sentAt)}
        <button className="reply-btn" onClick={onToggleCompose}>
          <i className="fa-solid fa-reply"></i>
        </button>
        <button onClick={() => onRemoveMail(email)} className="remove-btn">
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <span className="details-btn" onClick={setAsRead}>
          <Link to={`/details/${email.id}`}>
            <i className="fa-regular fa-eye"></i>
          </Link>
        </span>
      </td>
    </tr>
  );
}
