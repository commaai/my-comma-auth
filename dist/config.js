'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GITHUB_REDIRECT_LINK = exports.GITHUB_REDIRECT_URI = exports.GITHUB_AUTH_ENDPOINT = exports.GITHUB_CLIENT_ID = exports.APPLE_REDIRECT_LINK = exports.APPLE_OAUTH_PARAMS = exports.APPLE_STATE = exports.APPLE_REDIRECT_URI = exports.APPLE_SCOPES = exports.APPLE_CLIENT_ID = exports.APPLE_AUTH_ENDPOINT = exports.GOOGLE_REDIRECT_LINK = exports.GOOGLE_OAUTH_PARAMS = exports.GOOGLE_REDIRECT_URI = exports.GOOGLE_URL_ROOT = exports.GOOGLE_AUTH_ENDPOINT = exports.GOOGLE_CLIENT_ID = exports.AUTH_PATH = undefined;

var _querystringify = require('querystringify');

var _querystringify2 = _interopRequireDefault(_querystringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var service = 'localhost:3000';
if (typeof window !== 'undefined' && window.location) {
  service = window.location.host;
}

var AUTH_PATH = exports.AUTH_PATH = '/auth/';

var GOOGLE_CLIENT_ID = exports.GOOGLE_CLIENT_ID = '45471411055-ornt4svd2miog6dnopve7qtmh5mnu6id.apps.googleusercontent.com';
var GOOGLE_AUTH_ENDPOINT = exports.GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
var GOOGLE_URL_ROOT = exports.GOOGLE_URL_ROOT = 'https://www.googleapis.com/';
var GOOGLE_REDIRECT_URI = exports.GOOGLE_REDIRECT_URI = 'https://api.comma.ai/v2/auth/g/redirect/';
var GOOGLE_OAUTH_PARAMS = exports.GOOGLE_OAUTH_PARAMS = {
  type: 'web_server',
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: GOOGLE_REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  state: 'service,' + service,
  prompt: 'select_account'
};
var GOOGLE_REDIRECT_LINK = exports.GOOGLE_REDIRECT_LINK = GOOGLE_AUTH_ENDPOINT + '?' + _querystringify2.default.stringify(GOOGLE_OAUTH_PARAMS);

var APPLE_AUTH_ENDPOINT = exports.APPLE_AUTH_ENDPOINT = 'https://appleid.apple.com/auth/authorize';
var APPLE_CLIENT_ID = exports.APPLE_CLIENT_ID = 'ai.comma.login';
var APPLE_SCOPES = exports.APPLE_SCOPES = 'name email';
var APPLE_REDIRECT_URI = exports.APPLE_REDIRECT_URI = 'https://api.comma.ai/v2/auth/a/redirect/';
var APPLE_STATE = exports.APPLE_STATE = 'service,' + service;
var APPLE_OAUTH_PARAMS = exports.APPLE_OAUTH_PARAMS = {
  client_id: APPLE_CLIENT_ID,
  redirect_uri: APPLE_REDIRECT_URI,
  response_type: 'code',
  response_mode: 'form_post',
  scope: APPLE_SCOPES
};
var APPLE_REDIRECT_LINK = exports.APPLE_REDIRECT_LINK = APPLE_AUTH_ENDPOINT + '?' + _querystringify2.default.stringify(APPLE_OAUTH_PARAMS);

var GITHUB_CLIENT_ID = exports.GITHUB_CLIENT_ID = '28c4ecb54bb7272cb5a4';
var GITHUB_AUTH_ENDPOINT = exports.GITHUB_AUTH_ENDPOINT = 'https://github.com/login/oauth/authorize';
var GITHUB_REDIRECT_URI = exports.GITHUB_REDIRECT_URI = 'https://api.comma.ai/v2/auth/h/redirect/';
var GITHUB_OAUTH_PARAMS = {
  client_id: GITHUB_CLIENT_ID,
  redirect_uri: GITHUB_REDIRECT_URI,
  state: 'service,' + service,
  scope: 'read:user'
};
var GITHUB_REDIRECT_LINK = exports.GITHUB_REDIRECT_LINK = GITHUB_AUTH_ENDPOINT + '?' + _querystringify2.default.stringify(GITHUB_OAUTH_PARAMS);