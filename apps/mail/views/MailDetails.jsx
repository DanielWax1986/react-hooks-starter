const { useParams, useNavigate, Link } = ReactRouterDOM;
import { emailService } from "../services/mail.service.js";
const { useState, useEffect } = React;

export function MailDetails({ emailId }) {
  const [email, setEmail] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  var nextEmailIdx;

  useEffect(() => {
    loadEmail();
  }, []);

  function loadEmail() {
    emailService
      .get(params.emailId)
      .then((email) => setEmail(email))
      .catch((err) => console.log("err:", err));
  }

  console.log(emailId);
  if (!email) return <div>Loading...</div>;

  return (
    <section className="email-details-container">
      <div className="email-details-header">
        <h1>{email.subject}</h1>
        <div>{emailService.getDate(email.sentAt)}</div>
        <h4>{email.from}</h4>
        <div>{email.to}</div>
      </div>
      <div className="email-details-body">
        <p>{email.body}</p>
      </div>
    </section>
  );
}
