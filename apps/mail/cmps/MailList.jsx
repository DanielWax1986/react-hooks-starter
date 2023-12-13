import { MailPreview } from "./MailPreview.jsx";

export function MailList({ emails }) {
  return (
    <ul className="mail-list">
      {emails.map((email) => (
        <li key={email.id}>
          <MailPreview email={email} />
        </li>
      ))}
    </ul>
  );
}
