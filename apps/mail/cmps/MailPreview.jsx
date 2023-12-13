import { LongTxt } from "../cmps/LongTxt.jsx";
const { useState, useEffect } = React;

export function MailPreview({ email }) {
  const [isRead, setIsRead] = useState("");

  const date = new Date(email.sentAt);

  function handleReadCheckbox({ target }) {
    const value = target.value;
    email.isRead = !email.isRead;

    if (email.isRead === true) {
      setIsRead("read-email");
    } else setIsRead("");
  }
  return (
    <tr className={"email-preview " + isRead}>
      <td>
        <input
          value={email.isRead}
          onChange={handleReadCheckbox}
          type="checkBox"
          id="isRead"
          name="isRead"
        />
        {email.from}
      </td>
      <td>{email.subject}</td>
      <td>
        <LongTxt txt={email.body} />
        {/* {email.body} */}
      </td>
      <td>
        {date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()}
      </td>
    </tr>
  );
}
