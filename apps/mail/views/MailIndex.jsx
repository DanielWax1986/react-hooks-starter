import { emailService } from "../services/mail.service.js";
import { MailList } from "../cmps/MailList.jsx";
import { MailFilter } from "../cmps/MailFilter.jsx";
const { Link, Outlet } = ReactRouterDOM;
import { EmailCompose } from "./EmailCompose.jsx";
import { EmailFolderList } from "../cmps/EmailFolderList.jsx";

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
      .then((emails) => {
        const myMails = emails.filter((email) => email.removedAt === null);
        setEmails(myMails);
      })
      .catch((err) => console.log("err:", err));
  }

  if (!emails) return <div>Loading...</div>;
  return (
    <section className="email-index">
      <div className="index-toolbar">
        <button className="compose-btn">
          <Link to="compose">
            <i class="fa-solid fa-pencil"> Compose</i>
          </Link>
        </button>
        <EmailFolderList />
      </div>
      <div className="index-body">
        <MailFilter filterBy={filterBy} setFilterBy={setFilterBy} />
        <MailList emails={emails} setEmails={setEmails} />
        <Outlet />
      </div>
    </section>
  );
}
