import document from 'global/document';

import * as storage from './storage';
import * as google from './google';
import * as config from './config';
export { oauthRedirectLink } from './config';

module.exports = { storage, google, config };

export default { init, logOut, isAuthenticated };

// seed cache
async function init() {
  const token = await storage.getCommaAccessToken();
  return token;
}

function logOut() {
  storage.logOut();
  document.location.href = document.location.origin;
}

function isAuthenticated() {
  return storage.isAuthed;
}


