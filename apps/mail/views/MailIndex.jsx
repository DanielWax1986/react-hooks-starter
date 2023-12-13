import { emailService } from "../services/mail.service.js";
import { MailList } from "../cmps/MailList.jsx";
const { Link } = ReactRouterDOM;

const { useState, useEffect, useRef } = React;

export function MailIndex() {
  const [emails, setEmails] = useState(null);

  useEffect(() => {
    loadEmails();
  }, []);

  function loadEmails() {
    emailService
      .query()
      .then((emails) => setEmails(emails))
      .catch((err) => console.log("err:", err));
  }

  if (!emails) return <div>Loading...</div>;
  return (
    <section className="email-index">
      <button>
        <Link to="/email/compose">Compose</Link>
      </button>
      <MailList emails={emails} />
    </section>
  );
}
