'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GITHUB_CONNECT_REDIRECT_LINK = exports.GITHUB_JWT_REDIRECT_LINK = exports.GITHUB_REDIRECT_LINK = exports.GITHUB_REDIRECT_URI = exports.GITHUB_REDIRECT_PATH = exports.GITHUB_AUTH_ENDPOINT = exports.GITHUB_CONNECT_CLIENT_ID = exports.GITHUB_JWT_CLIENT_ID = exports.GITHUB_CLIENT_ID = exports.APPLE_REDIRECT_LINK = exports.APPLE_OAUTH_PARAMS = exports.APPLE_REDIRECT_URI = exports.APPLE_REDIRECT_PATH = exports.APPLE_SCOPES = exports.APPLE_CLIENT_ID = exports.APPLE_AUTH_ENDPOINT = exports.GOOGLE_REDIRECT_LINK = exports.GOOGLE_OAUTH_PARAMS = exports.GOOGLE_REDIRECT_URI = exports.GOOGLE_REDIRECT_PATH = exports.GOOGLE_URL_ROOT = exports.GOOGLE_AUTH_ENDPOINT = exports.GOOGLE_CLIENT_ID = undefined;

var _document = require('global/document');

var _document2 = _interopRequireDefault(_document);

var _querystringify = require('querystringify');

var _querystringify2 = _interopRequireDefault(_querystringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redirectOrigin = 'http://127.0.0.1';
if (_document2.default.location) {
  redirectOrigin = _document2.default.location.origin;
}

var GOOGLE_CLIENT_ID = exports.GOOGLE_CLIENT_ID = '45471411055-ornt4svd2miog6dnopve7qtmh5mnu6id.apps.googleusercontent.com';
var GOOGLE_AUTH_ENDPOINT = exports.GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
var GOOGLE_URL_ROOT = exports.GOOGLE_URL_ROOT = 'https://www.googleapis.com/';
var GOOGLE_REDIRECT_PATH = exports.GOOGLE_REDIRECT_PATH = '/auth/g/redirect';
var GOOGLE_REDIRECT_URI = exports.GOOGLE_REDIRECT_URI = redirectOrigin + GOOGLE_REDIRECT_PATH;
var GOOGLE_OAUTH_PARAMS = exports.GOOGLE_OAUTH_PARAMS = {
  type: 'web_server',
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: GOOGLE_REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  prompt: 'select_account'
};
var GOOGLE_REDIRECT_LINK = exports.GOOGLE_REDIRECT_LINK = [GOOGLE_AUTH_ENDPOINT, _querystringify2.default.stringify(GOOGLE_OAUTH_PARAMS)].join('?');

var APPLE_AUTH_ENDPOINT = exports.APPLE_AUTH_ENDPOINT = 'https://appleid.apple.com/auth/authorize';
var APPLE_CLIENT_ID = exports.APPLE_CLIENT_ID = 'ai.comma.login';
var APPLE_SCOPES = exports.APPLE_SCOPES = 'name email';
var APPLE_REDIRECT_PATH = exports.APPLE_REDIRECT_PATH = '/auth/a/redirect';
var APPLE_REDIRECT_URI = exports.APPLE_REDIRECT_URI = redirectOrigin + APPLE_REDIRECT_PATH;
var APPLE_OAUTH_PARAMS = exports.APPLE_OAUTH_PARAMS = {
  client_id: APPLE_CLIENT_ID,
  redirect_uri: APPLE_REDIRECT_URI,
  response_type: 'code',
  response_mode: 'form_post',
  scope: APPLE_SCOPES
};
var APPLE_REDIRECT_LINK = exports.APPLE_REDIRECT_LINK = [APPLE_AUTH_ENDPOINT, _querystringify2.default.stringify(APPLE_OAUTH_PARAMS)].join('?');

var GITHUB_CLIENT_ID = exports.GITHUB_CLIENT_ID = '2ca8e276e644c46c00fa';
var GITHUB_JWT_CLIENT_ID = exports.GITHUB_JWT_CLIENT_ID = 'ab2554c75d1f582864bb';
var GITHUB_CONNECT_CLIENT_ID = exports.GITHUB_CONNECT_CLIENT_ID = '9df7d201e5d1a3378382';
var GITHUB_AUTH_ENDPOINT = exports.GITHUB_AUTH_ENDPOINT = 'https://github.com/login/oauth/authorize';
var GITHUB_REDIRECT_PATH = exports.GITHUB_REDIRECT_PATH = '/auth/h/redirect';
var GITHUB_REDIRECT_URI = exports.GITHUB_REDIRECT_URI = redirectOrigin + GITHUB_REDIRECT_PATH;
var GITHUB_REDIRECT_LINK = exports.GITHUB_REDIRECT_LINK = [GITHUB_AUTH_ENDPOINT, _querystringify2.default.stringify({
  client_id: GITHUB_CLIENT_ID,
  redirect_uri: GITHUB_REDIRECT_URI,
  scope: 'read:user'
})].join('?');
var GITHUB_JWT_REDIRECT_LINK = exports.GITHUB_JWT_REDIRECT_LINK = [GITHUB_AUTH_ENDPOINT, _querystringify2.default.stringify({
  client_id: GITHUB_JWT_CLIENT_ID,
  redirect_uri: GITHUB_REDIRECT_URI,
  scope: 'read:user'
})].join('?');
var GITHUB_CONNECT_REDIRECT_LINK = exports.GITHUB_CONNECT_REDIRECT_LINK = [GITHUB_AUTH_ENDPOINT, _querystringify2.default.stringify({
  client_id: GITHUB_CONNECT_CLIENT_ID,
  redirect_uri: GITHUB_REDIRECT_URI,
  scope: 'read:user'
})].join('?');