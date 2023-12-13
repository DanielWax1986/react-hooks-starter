// mail service

import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";
import { localStorageService } from "../../../services/storage.service.js";

export const emailService = {
  query,
};

const EMAIL_KEY = "emailDB";

const loggedinUser = {
  email: "user@appsus.com",
  fullname: "Mahatma Appsus",
};

function query(key) {
  return storageService.query(key).then((entities) => {
    //add filter later
    return entities;
  });
}

function get(key, emailId) {
  return storageService.get(key, emailId);
}

function remove(key, emailId) {
  return storageService.remove(key, emailId);
}

function save(key, entity) {
  if (entity.id) {
    return storageService.put(key, entity);
  } else {
    return storageService.post(key, entity);
  }
}

function getEmptyEmail(senderData, emailData) {
  return {
    id: "",
    subject: emailData.subject,
    body: emailData.body,
    isRead: false,
    sentAt: emailData.date,
    removedAt: null,
    from: senderData.from,
    to: senderData.to,
  };
}

// Private functions
function _createEmails() {
  let emails = localStorageService.loadFromStorage(EMAIL_KEY);

  if (!emails || !emails.length) {
    emails = bookJson();
    localStorageService.saveToStorage(BOOK_KEY, books);
  }
}

function _createEmail(senderData, emailData) {
  const email = getEmptyEmail(senderData, emailData);
  email.id = utilService.makeId();

  return email;
}
