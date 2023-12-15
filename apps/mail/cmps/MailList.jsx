import { MailPreview } from "./MailPreview.jsx";
import { emailService } from "../services/mail.service.js";

export function MailList({ emails, setEmails }) {
  function onRemoveMail(email) {
    emailService.moveToTrash(email).then(() => {
      setEmails((prevEmails) => {
        return prevEmails.filter((preEmail) => preEmail.id !== email.id);
      });
    });
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
