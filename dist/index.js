'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.google = exports.storage = undefined;

var _document = require('global/document');

var _document2 = _interopRequireDefault(_document);

var _storage = require('./storage');

var storage = _interopRequireWildcard(_storage);

var _google = require('./google');

var google = _interopRequireWildcard(_google);

var _config = require('./config');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.storage = storage;
exports.google = google;
exports.config = config;

// seed cache

async function init() {
  const token = await storage.getCommaAccessToken();
  return token;
}

function logOut() {
  storage.logOut();
  _document2.default.location.href = _document2.default.location.origin;
}

function isAuthenticated() {
  return storage.isAuthed;
}

exports.default = { init, logOut, isAuthenticated };