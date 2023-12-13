export function MailPreview({ email }) {
  return (
    <article className="email-preview">
      <h4>{email.from}</h4>
      <h4>{email.subject}</h4>
      <p>{email.body}</p>
      {/* <p>{email.sentAt}</p> */}
    </article>
  );
}
