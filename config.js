import document from 'global/document';
import qs from 'querystringify';

export const GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
export const GOOGLE_CLIENT_ID = '45471411055-ornt4svd2miog6dnopve7qtmh5mnu6id.apps.googleusercontent.com';
export const GOOGLE_URL_ROOT = 'https://www.googleapis.com/';

var redirectOrigin = 'http://127.0.0.1';
if (document.location) {
  redirectOrigin = document.location.origin;
}
export const REDIRECT_URI = redirectOrigin + '/auth/g/redirect';

export const OAUTH_PARAMS = {
  type: 'web_server',
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  prompt: 'select_account',
};


export const oauthRedirectLink = [GOOGLE_AUTH_ENDPOINT, qs.stringify(OAUTH_PARAMS)].join('?');
