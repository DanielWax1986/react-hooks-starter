const { Route, Routes } = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;

import { AppHeader } from "./cmps/AppHeader.jsx";
import { About } from "./views/About.jsx";
import { Home } from "./views/Home.jsx";
import { NoteIndex } from "./apps/note/views/note-index.jsx";
import { MailIndex } from "./apps/mail/views/MailIndex.jsx";
import { EmailCompose } from "./apps/mail/views/EmailCompose.jsx";
import { MailDetails } from "./apps/mail/views/MailDetails.jsx";

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail" element={<MailIndex />}>
            <Route path="compose" element={<EmailCompose />} />
          </Route>
          <Route path="/details/:emailId" element={<MailDetails />} />
          <Route path="/note" element={<NoteIndex />} />
        </Routes>
      </section>
    </Router>
  );
}
