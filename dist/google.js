'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exchangeCodeForTokens = exports.postForm = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var postForm = exports.postForm = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(endpoint, data) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
              googleRequest.post(endpoint, {
                body: _querystringify2.default.stringify(data),
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }, (0, _errorHandler2.default)(resolve, reject));
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function postForm(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var exchangeCodeForTokens = exports.exchangeCodeForTokens = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(code) {
    var params;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = {
              code: code,
              client_id: Config.GOOGLE_CLIENT_ID,
              client_secret: Config.GOOGLE_CLIENT_SECRET,
              redirect_uri: Config.REDIRECT_URI,
              grant_type: 'authorization_code'
            };
            return _context2.abrupt('return', postForm('oauth2/v4/token/', params));

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function exchangeCodeForTokens(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _instance = require('config-request/instance');

var _instance2 = _interopRequireDefault(_instance);

var _querystringify = require('querystringify');

var _querystringify2 = _interopRequireDefault(_querystringify);

var _errorHandler = require('comma-api/src/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _config = require('./config');

var Config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var googleRequest = (0, _instance2.default)();
googleRequest.configure({
  baseUrl: Config.GOOGLE_URL_ROOT,
  parse: JSON.parse
});