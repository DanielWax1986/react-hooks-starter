// mail service

import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";
import { localStorageService } from "../../../services/storage.service.js";
import { emailJson } from "./emails.json.js";

const EMAIL_KEY = "emailDB";
_createEmails();

export const emailService = {
  query,
  get,
  remove,
  save,
  getEmptyEmail,
  getUser,
};

function query() {
  return storageService.query(EMAIL_KEY).then((entities) => {
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

function getUser() {
  return {
    email: "user@appsus.com",
    fullname: "Mahatma Appsus",
  };
}

// Private functions
function _createEmails() {
  let emails = localStorageService.loadFromStorage(EMAIL_KEY);

  if (!emails || !emails.length) {
    emails = emailJson();
    localStorageService.saveToStorage(EMAIL_KEY, emails);
  }
}

function _createEmail(senderData, emailData) {
  const email = getEmptyEmail(senderData, emailData);
  email.id = utilService.makeId();

  return email;

  // May cause problems, fix later
}
