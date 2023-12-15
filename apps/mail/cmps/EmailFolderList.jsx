import { emailService } from "../services/mail.service.js";
const { useParams, useNavigate, Link } = ReactRouterDOM;

export function EmailFolderList({ setEmails }) {
  const navigate = useNavigate();

  function inboxFolder() {
    emailService
      .query()
      .then((emails) => {
        const myMails = emails.filter((email) => email.removedAt === null);
        setEmails(myMails);
      })
      .catch((err) => console.log("err:", err));
  }

  function starredFolder() {
    emailService
      .query()
      .then((emails) => {
        const starredEmails = emails.filter((email) => email.important);

        setEmails(starredEmails);
      })
      .catch((err) => console.log("err:", err));
  }

  function trashFolder() {
    emailService
      .query()
      .then((emails) => {
        const trashEmails = emails.filter((email) => email.removedAt);

        setEmails(trashEmails);
      })
      .catch((err) => console.log("err:", err));
  }

  return (
    <aside className="tool-sidebar">
      <button onClick={inboxFolder}>
        <i className="fa-solid fa-inbox"></i>
        <span>Inbox</span>
      </button>
      <button>
        <i className="fa-regular fa-paper-plane"></i>
        <span>Sent</span>
      </button>
      <button onClick={starredFolder}>
        <i className="fa-solid fa-star"></i>
        <span>Starred</span>
      </button>
      <button onClick={trashFolder}>
        <i className="fa-regular fa-trash-can"></i>
        <span>Trash</span>
      </button>
    </aside>
  );
}
