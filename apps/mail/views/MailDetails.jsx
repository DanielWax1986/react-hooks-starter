const { useParams, useNavigate, Link } = ReactRouterDOM;
import { emailService } from "../services/mail.service.js";
const { useState, useEffect } = React;
import { EmailFolderList } from "../cmps/EmailFolderList.jsx";
import { EmailCompose } from "./EmailCompose.jsx";

export function MailDetails() {
  const [email, setEmail] = useState(null);
  const { emailId } = useParams();
  const navigate = useNavigate();
  const [isComposeShown, setIsComposeShown] = useState({
    isShown: false,
    sendTo: "",
  });

  function onToggleCompose() {
    setIsComposeShown((prev) => ({
      ...prev,
      isShown: !prev.isShown,
      sendTo: email.from,
    }));
  }

  useEffect(() => {
    loadEmail();
  }, []);

  function loadEmail() {
    emailService
      .get(emailId)
      .then((email) => setEmail(email))
      .catch((err) => console.log("err:", err));
  }

  function onBack() {
    navigate("/mail");
  }

  function onRemoveMail() {
    emailService.moveToTrash(email).then(() => navigate("/mail"));
  }

  if (!email) return <div>Loading...</div>;

  return (
    <section className="email-details-container">
      <div className="email-details-toolbar">
        <button>
          <i onClick={onBack} className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="email-opts">
          <button onClick={onToggleCompose}>
            <i className="fa-solid fa-reply"></i>
          </button>
          <button onClick={onRemoveMail}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
      <div className="email-details-header">
        <h1>{email.subject}</h1>
        <div className="email-details-meta">
          <span>{emailService.getDate(email.sentAt)}</span>
          <span className="email-details-from">From: {email.from}</span>
          <span>{"<" + email.to + ">"}</span>
        </div>
      </div>
      {isComposeShown.isShown && (
        <EmailCompose
          setIsComposeShown={setIsComposeShown}
          sendTo={email.from}
        />
      )}
      <div className="email-details-body">
        <p>{email.body}</p>
      </div>
    </section>
  );
}
