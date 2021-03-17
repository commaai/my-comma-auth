import document from 'global/document';
import qs from 'querystringify';

var redirectOrigin = 'http://127.0.0.1';
if (document.location) {
  redirectOrigin = document.location.origin;
}

export const GOOGLE_CLIENT_ID = '45471411055-ornt4svd2miog6dnopve7qtmh5mnu6id.apps.googleusercontent.com';
export const GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
export const GOOGLE_URL_ROOT = 'https://www.googleapis.com/';
export const GOOGLE_REDIRECT_PATH = '/auth/g/redirect';
export const GOOGLE_REDIRECT_URI = redirectOrigin + GOOGLE_REDIRECT_PATH;
export const GOOGLE_OAUTH_PARAMS = {
  type: 'web_server',
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: GOOGLE_REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  prompt: 'select_account',
};
export const GOOGLE_REDIRECT_LINK = [GOOGLE_AUTH_ENDPOINT, qs.stringify(GOOGLE_OAUTH_PARAMS)].join('?')

export const APPLE_AUTH_ENDPOINT = 'https://appleid.apple.com/auth/authorize';
export const APPLE_CLIENT_ID = 'ai.comma.login';
export const APPLE_SCOPES = 'name email';
export const APPLE_REDIRECT_PATH = '/auth/a/redirect';
export const APPLE_REDIRECT_URI = redirectOrigin + APPLE_REDIRECT_PATH;
export const APPLE_OAUTH_PARAMS = {
  client_id : APPLE_CLIENT_ID,
  redirect_uri: APPLE_REDIRECT_URI,
  response_type: 'code',
  response_mode: 'form_post',
  scope: APPLE_SCOPES,
};
export const APPLE_REDIRECT_LINK = [APPLE_AUTH_ENDPOINT, qs.stringify(APPLE_OAUTH_PARAMS)].join('?')

export const GITHUB_CLIENT_ID = '2ca8e276e644c46c00fa';
export const GITHUB_JWT_CLIENT_ID = 'ab2554c75d1f582864bb'
export const GITHUB_AUTH_ENDPOINT = 'https://github.com/login/oauth/authorize';
export const GITHUB_REDIRECT_PATH = '/auth/h/redirect';
export const GITHUB_REDIRECT_URI = redirectOrigin + GITHUB_REDIRECT_PATH;
export const GITHUB_REDIRECT_LINK = [GITHUB_AUTH_ENDPOINT, qs.stringify({
  client_id: GITHUB_CLIENT_ID,
  redirect_uri: GITHUB_REDIRECT_URI,
  scope: 'read:user',
})].join('?');
export const GITHUB_JWT_REDIRECT_LINK = [GITHUB_AUTH_ENDPOINT, qs.stringify({
  client_id: GITHUB_JWT_CLIENT_ID,
  redirect_uri: GITHUB_REDIRECT_URI,
  scope: 'read:user',
})].join('?');
