'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oauthRedirectLink = exports.OAUTH_PARAMS = exports.REDIRECT_URI = exports.GOOGLE_URL_ROOT = exports.GOOGLE_CLIENT_ID = exports.GOOGLE_AUTH_ENDPOINT = undefined;

var _document = require('global/document');

var _document2 = _interopRequireDefault(_document);

var _querystringify = require('querystringify');

var _querystringify2 = _interopRequireDefault(_querystringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GOOGLE_AUTH_ENDPOINT = exports.GOOGLE_AUTH_ENDPOINT = 'https://accounts.google.com/o/oauth2/auth';
var GOOGLE_CLIENT_ID = exports.GOOGLE_CLIENT_ID = '45471411055-ornt4svd2miog6dnopve7qtmh5mnu6id.apps.googleusercontent.com';
var GOOGLE_URL_ROOT = exports.GOOGLE_URL_ROOT = 'https://www.googleapis.com/';

var redirectOrigin = 'http://127.0.0.1';
if (_document2.default.location) {
  redirectOrigin = _document2.default.location.origin;
}
var REDIRECT_URI = exports.REDIRECT_URI = redirectOrigin + '/auth/g/redirect';

var OAUTH_PARAMS = exports.OAUTH_PARAMS = {
  type: 'web_server',
  client_id: GOOGLE_CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  prompt: 'select_account'
};

var oauthRedirectLink = exports.oauthRedirectLink = [GOOGLE_AUTH_ENDPOINT, _querystringify2.default.stringify(OAUTH_PARAMS)].join('?');