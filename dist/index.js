'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.storage = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

// seed cache
var init = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var token;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return storage.getCommaAccessToken();

          case 2:
            token = _context.sent;
            return _context.abrupt('return', token);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

var _document = require('global/document');

var _document2 = _interopRequireDefault(_document);

var _storage = require('./storage');

var storage = _interopRequireWildcard(_storage);

var _config = require('./config');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.storage = storage;
exports.config = config;


function logOut() {
  storage.logOut();
  _document2.default.location.href = _document2.default.location.origin;
}

function isAuthenticated() {
  return storage.isAuthed;
}

exports.default = { init: init, logOut: logOut, isAuthenticated: isAuthenticated };