import { emailService } from "../services/mail.service.js";
import { MailList } from "../cmps/MailList.jsx";
import { MailFilter } from "../cmps/MailFilter.jsx";
const { Link, Outlet } = ReactRouterDOM;
import { EmailCompose } from "./EmailCompose.jsx";
import { EmailFolderList } from "../cmps/EmailFolderList.jsx";
import { localStorageService } from "../../../services/storage.service.js";

const { useState, useEffect } = React;

export function MailIndex() {
  const [emails, setEmails] = useState(null);
  const [filterBy, setFilterBy] = useState(emailService.getDefaultFilter());
  const themeColor = localStorageService.loadFromStorage("PAGE_COLOR");
  const [isComposeShown, setIsComposeShown] = useState({
    isShown: false,
    sendTo: "",
  });

  function onToggleCompose() {
    setIsComposeShown((prev) => ({
      ...prev,
      isShown: !prev.isShown,
      sendTo: "",
    }));
  }

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
    <section className="email-index" style={{ backgroundColor: themeColor }}>
      <div className="index-toolbar">
        <button onClick={onToggleCompose} className="compose-btn">
          {/* <Link to="compose">
            <i className="fa-solid fa-pencil"> Compose</i>
          </Link> */}
          <i className="fa-solid fa-pencil"> Compose</i>
        </button>
        <EmailFolderList emails={emails} setEmails={setEmails} />
      </div>
      {isComposeShown.isShown && (
        <EmailCompose
          setIsComposeShown={setIsComposeShown}
          sendTo={isComposeShown.sendTo}
        />
      )}
      <div className="index-body">
        <MailFilter
          setEmails={setEmails}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
        <MailList
          emails={emails}
          setEmails={setEmails}
          setIsComposeShown={setIsComposeShown}
        />
        {/* <Outlet /> */}
      </div>
    </section>
  );
}
