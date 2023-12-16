import { MailPreview } from "./MailPreview.jsx";
import { emailService } from "../services/mail.service.js";

export function MailList({ emails, setEmails, setIsComposeShown }) {
  function removeForEternity(email) {
    emailService.remove(email.id).then(() => {
      setEmails((prevEmails) => {
        return prevEmails.filter((preEmail) => preEmail.id !== email.id);
      });
    });
  }

  function onRemoveMail(email) {
    if (email.removedAt !== null) {
      removeForEternity(email);
      return;
    }
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
            setIsComposeShown={setIsComposeShown}
          />
        ))}
      </tbody>
    </table>
  );
}
