// mail service

import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";
import { localStorageService } from "../../../services/storage.service.js";
import { emailJson } from "./emails.json.js";

const EMAIL_KEY = "emailDB";
const LOGGED_USER = "loggedUser";
_createEmails();
saveLogInUser(getUser());

export const emailService = {
  query,
  getLoggedInUser,
  get,
  remove,
  save,
  getEmptyEmail,
  getUser,
  saveLogInUser,
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

function save(entity) {
  if (entity.id) {
    return storageService.put(EMAIL_KEY, entity);
  } else {
    return storageService.post(EMAIL_KEY, entity);
  }
}

function getEmptyEmail() {
  return {
    id: "",
    subject: "",
    body: "",
    isRead: false,
    sentAt: "",
    removedAt: null,
    from: "",
    to: "",
  };
}

function getUser() {
  return {
    email: "user@appsus.com",
    fullname: "Mahatma Appsus",
  };
}

function getLoggedInUser() {
  return localStorageService.loadFromStorage(LOGGED_USER);
}

function saveLogInUser(user) {
  localStorageService.saveToStorage(LOGGED_USER, user);
}

function createEmail(senderData, emailData) {
  const email = getEmptyEmail();
  email.id = utilService.makeId();

  return email;

  // May cause problems, fix later
}

// Private functions
function _createEmails() {
  let emails = localStorageService.loadFromStorage(EMAIL_KEY);

  if (!emails || !emails.length) {
    emails = emailJson();
    localStorageService.saveToStorage(EMAIL_KEY, emails);
  }
}
