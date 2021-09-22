import * as storage from './storage';
import * as config from './config';

export { storage, config };

// seed cache
async function init() {
  const token = await storage.getCommaAccessToken();
  return token;
}

async function logOut() {
  await storage.logOut();

  if (typeof window !== 'undefined') {
    window.location.href = window.location.origin;
  }
}

function isAuthenticated() {
  return storage.isAuthed;
}

export default { init, logOut, isAuthenticated };
