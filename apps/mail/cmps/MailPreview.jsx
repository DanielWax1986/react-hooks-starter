import { LongTxt } from "../cmps/LongTxt.jsx";

export function MailPreview({ email }) {
  const date = new Date(email.sentAt);

  return (
    <tr className="email-preview">
      <td>
        <input
          value={email.isRead}
          onChange={() => {
            email.isRead = !email.isRead;
          }}
          type="checkBox"
          id="isRead"
          name="isRead"
        />
      </td>
      <td>{email.from}</td>
      <td>{email.subject}</td>
      <td>
        <LongTxt txt={email.body} />
      </td>
      <td>
        {date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()}
      </td>
    </tr>
  );
}
