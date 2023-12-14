import { emailService } from "../services/mail.service.js";
import { MailList } from "../cmps/MailList.jsx";
import { MailFilter } from "../cmps/MailFilter.jsx";
const { Link, Outlet } = ReactRouterDOM;
import { EmailCompose } from "./EmailCompose.jsx";

const { useState, useEffect, useRef } = React;

export function MailIndex() {
  const [emails, setEmails] = useState(null);
  const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter());

  useEffect(() => {
    emailService.setFilterBy(filterBy);
    loadEmails();
  }, [filterBy]);

  function loadEmails() {
    emailService
      .query()
      .then((emails) => setEmails(emails))
      .catch((err) => console.log("err:", err));
  }

  function onSetFilter(filterBy) {
    setFilterBy(filterBy);
  }

  const { subject, content, isRead } = filterBy;

  if (!emails) return <div>Loading...</div>;
  return (
    <section className="email-index">
      <button>
        <Link to="compose">New Email</Link>
      </button>
      <MailFilter filterBy={filterBy} setFilterBy={setFilterBy} />

      <MailList emails={emails} />
      <Outlet />
    </section>
  );
}
