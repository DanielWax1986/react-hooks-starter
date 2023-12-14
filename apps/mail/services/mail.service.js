// mail service

import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";
import { localStorageService } from "../../../services/storage.service.js";
import { emailJson } from "./emails.json.js";

const EMAIL_KEY = "emailDB";
const LOGGED_USER = "loggedUser";
var gFilterBy = { subject: "", content: "", isRead: "" };
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
  getDefaultFilter,
  getFilterBy,
  setFilterBy,
  filterByRead,
};

function query() {
  return storageService.query(EMAIL_KEY).then((entities) => {
    var contentFilter = [];

    if (gFilterBy.content) {
      const regex = new RegExp(gFilterBy.content, "i");
      contentFilter = entities.filter((entity) => regex.test(entity.body));
    }
    if (gFilterBy.subject) {
      const regex = new RegExp(gFilterBy.subject, "i");
      entities = entities.filter((entity) => regex.test(entity.subject));
    }

    entities = myConcat(contentFilter, entities);

    entities = filterByRead(entities);

    return entities;
  });
}

function myConcat(arr1, arr2) {
  const idsInArr1 = new Set(arr1.map((entity) => entity.id));
  const uniqueEntities = arr2.filter((entity) => !idsInArr1.has(entity.id));

  return arr1.concat(uniqueEntities);
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

function filterByRead(emails) {
  if (gFilterBy.isRead === "All") return emails;
  else if (gFilterBy.isRead === "Read") {
    return emails.filter((email) => email.isRead === true);
  } else {
    return emails.filter((email) => email.isRead === false);
  }
}

function getDefaultFilter() {
  return { subject: "", content: "", isRead: "All" };
}

function getFilterBy() {
  return { ...gFilterBy };
}

function setFilterBy(filterBy = {}) {
  if (filterBy.subject !== undefined) gFilterBy.subject = filterBy.subject;
  if (filterBy.content !== undefined) gFilterBy.content = filterBy.content;
  if (filterBy.isRead !== undefined) gFilterBy.isRead = filterBy.isRead;
  return gFilterBy;
}

// Private functions
function _createEmails() {
  let emails = localStorageService.loadFromStorage(EMAIL_KEY);

  if (!emails || !emails.length) {
    emails = emailJson();
    localStorageService.saveToStorage(EMAIL_KEY, emails);
  }
}
