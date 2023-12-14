import { MailPreview } from "./MailPreview.jsx";
import { emailService } from "../services/mail.service.js";

export function MailList({ emails, setEmails }) {
  function onRemoveMail(emailId) {
    emailService
      .remove(emailId)
      .then(() => {
        setEmails((prevEmails) => {
          return prevEmails.filter((email) => email.id !== emailId);
        });
      })
      .catch((err) => console.log("err:", err));
  }

  return (
    <table className="mail-list">
      <tbody>
        {emails.map((email) => (
          <MailPreview
            email={email}
            key={email.id}
            onRemoveMail={onRemoveMail}
          />
        ))}
      </tbody>
    </table>
  );
}
