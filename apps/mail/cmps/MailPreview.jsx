import { LongTxt } from "../cmps/LongTxt.jsx";
const { useState, useEffect } = React;
import { emailService } from "../services/mail.service.js";
import { MailDetails } from "../views/MailDetails.jsx";
const { Link } = ReactRouterDOM;

export function MailPreview({ email, onRemoveMail }) {
  const [isRead, setIsRead] = useState("");

  useEffect(() => {
    if (email.isRead === true) {
      setIsRead("read-email");
    } else setIsRead("");
  }, []);

  function handleReadCheckbox() {
    email.isRead = !email.isRead;
    emailService.save(email);

    if (email.isRead === true) {
      setIsRead("read-email");
    } else setIsRead("");
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
        <button className="star-btn">
          <i className="fa-regular fa-star"></i>
        </button>
        {email.from}
      </td>
      <td className="subject">{email.subject}</td>
      <td className="content">
        <LongTxt txt={email.body} />
      </td>
      <td className="date">
        {emailService.getDate(email.sentAt)}
        <button onClick={() => onRemoveMail(email.id)} className="remove-btn">
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <Link to={`/details/${email.id}`}>
          <i className="fa-regular fa-eye"></i>
        </Link>
      </td>
    </tr>
  );
}
