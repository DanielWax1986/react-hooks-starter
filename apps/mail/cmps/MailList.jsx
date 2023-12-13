import { MailPreview } from "./MailPreview.jsx";

export function MailList({ emails }) {
  return (
    <table className="mail-list">
      <tbody>
        {emails.map((email) => (
          <MailPreview email={email} key={email.id} />
        ))}
      </tbody>
    </table>
  );
}
