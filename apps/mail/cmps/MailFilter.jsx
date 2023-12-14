const { useState, useEffect } = React;
import { emailService } from "../services/mail.service.js";

export function MailFilter({ filterBy, setFilterBy }) {
  useEffect(() => {
    setFilterBy(filterBy);
  }, [setFilterBy]);

  function handleSubjectChange(subject) {
    filterBy.subject = subject;
    setFilterBy((prevFilter) => ({ ...prevFilter, subject, content: subject }));
  }

  function handleIsRead({ target }) {
    setFilterBy((prevFilter) => ({ ...prevFilter, isRead: target.value }));
  }

  return (
    <section className="menu-icon">
      <input
        value={filterBy.subject}
        onChange={(e) => {
          handleSubjectChange(e.target.value);
        }}
        type="text"
        id="search"
        name="search"
        placeholder="Search"
      />
      <select onChange={handleIsRead} id="read-unread" name="read-unread">
        <option value={"All"}>All</option>
        <option value={"Unread"}>Unread</option>
        <option value={"Read"}>Read</option>
      </select>
    </section>
  );
}
