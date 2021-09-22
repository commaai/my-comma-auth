import qs from 'querystringify';

let service = 'localhost:3000';
if (typeof window !== 'undefined' && window.location) {
  service = window.location.host;
}

export const AUTH_PATH = '/auth/';

export const GOOGLE_CLIENT_ID = '45471411055-ornt4svd2miog6dnopve7qtmh5mnu6id.apps.googleusercontent.com';
export const GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
export const GOOGLE_URL_ROOT = 'https://www.googleapis.com/';
export const GOOGLE_REDIRECT_URI = 'https://api.comma.ai/v2/auth/g/redirect/'
export const GOOGLE_OAUTH_PARAMS = {
  type: 'web_server',
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: GOOGLE_REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  state: 'service,' + service,
  prompt: 'select_account',
};
export const GOOGLE_REDIRECT_LINK = GOOGLE_AUTH_ENDPOINT + '?' + qs.stringify(GOOGLE_OAUTH_PARAMS);

export const APPLE_AUTH_ENDPOINT = 'https://appleid.apple.com/auth/authorize';
export const APPLE_CLIENT_ID = 'ai.comma.login';
export const APPLE_SCOPES = 'name email';
export const APPLE_REDIRECT_URI = 'https://api.comma.ai/v2/auth/a/redirect/'
export const APPLE_STATE = 'service,' + service;
export const APPLE_OAUTH_PARAMS = {
  client_id : APPLE_CLIENT_ID,
  redirect_uri: APPLE_REDIRECT_URI,
  response_type: 'code',
  response_mode: 'form_post',
  scope: APPLE_SCOPES,
};
export const APPLE_REDIRECT_LINK = APPLE_AUTH_ENDPOINT + '?' + qs.stringify(APPLE_OAUTH_PARAMS);

export const GITHUB_CLIENT_ID = '28c4ecb54bb7272cb5a4';
export const GITHUB_AUTH_ENDPOINT = 'https://github.com/login/oauth/authorize';
export const GITHUB_REDIRECT_URI = 'https://api.comma.ai/v2/auth/h/redirect/'
const GITHUB_OAUTH_PARAMS = {
  client_id: GITHUB_CLIENT_ID,
  redirect_uri: GITHUB_REDIRECT_URI,
  state: 'service,' + service,
  scope: 'read:user',
};
export const GITHUB_REDIRECT_LINK = GITHUB_AUTH_ENDPOINT + '?' + qs.stringify(GITHUB_OAUTH_PARAMS);
