'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oauthRedirectLink = exports.OAUTH_PARAMS = exports.REDIRECT_URI = exports.GOOGLE_URL_ROOT = exports.GOOGLE_CLIENT_SECRET = exports.GOOGLE_CLIENT_ID = exports.GOOGLE_AUTH_ENDPOINT = undefined;

var _document = require('global/document');

var _document2 = _interopRequireDefault(_document);

var _querystringify = require('querystringify');

var _querystringify2 = _interopRequireDefault(_querystringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GOOGLE_AUTH_ENDPOINT = exports.GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
const GOOGLE_CLIENT_ID = exports.GOOGLE_CLIENT_ID = '45471411055-ffgv404iin6vi94qv6g6hd8fb48hr4bf.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = exports.GOOGLE_CLIENT_SECRET = '_9OMwDPbbx2JktznntXt-1Hs';
const GOOGLE_URL_ROOT = exports.GOOGLE_URL_ROOT = 'https://www.googleapis.com/';

var redirectOrigin = 'http://127.0.0.1';
if (_document2.default.location) {
  redirectOrigin = _document2.default.location.origin;
}
const REDIRECT_URI = exports.REDIRECT_URI = redirectOrigin + '/auth/g/redirect';

const OAUTH_PARAMS = exports.OAUTH_PARAMS = {
  type: 'web_server',
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  prompt: 'select_account'
};

const oauthRedirectLink = exports.oauthRedirectLink = [GOOGLE_AUTH_ENDPOINT, _querystringify2.default.stringify(OAUTH_PARAMS)].join('?');