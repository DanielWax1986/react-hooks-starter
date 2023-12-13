export function MailPreview({ email }) {
  return (
    <tr className="email-preview">
      <td>{email.from}</td>
      <td>{email.subject}</td>
      <td>{email.body}</td>
      {/* <p>{email.sentAt}</p> */}
    </tr>
  );
}
