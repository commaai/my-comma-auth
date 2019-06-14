'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postForm = postForm;
exports.exchangeCodeForTokens = exchangeCodeForTokens;

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

const googleRequest = (0, _instance2.default)();
googleRequest.configure({
  baseUrl: Config.GOOGLE_URL_ROOT,
  parse: JSON.parse
});

async function postForm(endpoint, data) {
  return new Promise((resolve, reject) => {
    googleRequest.post(endpoint, {
      body: _querystringify2.default.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }, (0, _errorHandler2.default)(resolve, reject));
  });
}

async function exchangeCodeForTokens(code) {
  const params = {
    code: code,
    client_id: Config.GOOGLE_CLIENT_ID,
    client_secret: Config.GOOGLE_CLIENT_SECRET,
    redirect_uri: Config.REDIRECT_URI,
    grant_type: 'authorization_code'
  };

  return postForm('oauth2/v4/token/', params);
}