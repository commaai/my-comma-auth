'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthed = undefined;
exports.logOut = logOut;
exports.getTokenInternal = getTokenInternal;
exports.getCommaAccessToken = getCommaAccessToken;

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let isAuthed = exports.isAuthed = false;
let useForage = true;

function logOut() {
  localStorage.removeItem('authorization');
  if (useForage) {
    _localforage2.default.removeItem('authorization');
  }
}

function getTokenInternal() {
  if (typeof localStorage !== 'undefined') {
    if (localStorage.authorization) {
      return localStorage.authorization;
    }
  }
  return null;
}

async function getCommaAccessToken() {
  let token = getTokenInternal();
  if (!token) {
    try {
      token = await _localforage2.default.getItem('authorization');
    } catch (e) {
      useForage = false;
    }
  }

  if (token) {
    exports.isAuthed = isAuthed = true;
    if (useForage) {
      await _localforage2.default.setItem('authorization', token);
    }
  }

  return token;
}
