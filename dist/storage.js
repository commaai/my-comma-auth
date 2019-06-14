'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommaAccessToken = exports.setCommaAccessToken = exports.isAuthed = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var setCommaAccessToken = exports.setCommaAccessToken = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            localStorage.setItem('authorization', token);
            return _context.abrupt('return', getCommaAccessToken());

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function setCommaAccessToken(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getCommaAccessToken = exports.getCommaAccessToken = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var token;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = getTokenInternal();

            if (token) {
              _context2.next = 11;
              break;
            }

            _context2.prev = 2;
            _context2.next = 5;
            return _localforage2.default.getItem('authorization');

          case 5:
            token = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](2);

            useForage = false;

          case 11:
            if (!token) {
              _context2.next = 16;
              break;
            }

            exports.isAuthed = isAuthed = true;

            if (!useForage) {
              _context2.next = 16;
              break;
            }

            _context2.next = 16;
            return _localforage2.default.setItem('authorization', token);

          case 16:
            return _context2.abrupt('return', token);

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 8]]);
  }));

  return function getCommaAccessToken() {
    return _ref2.apply(this, arguments);
  };
}();

exports.logOut = logOut;
exports.getTokenInternal = getTokenInternal;

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAuthed = exports.isAuthed = false;
var useForage = true;

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