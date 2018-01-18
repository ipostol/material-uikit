'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagination = exports.default = undefined;

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Pagination2.default;
var pagination = exports.pagination = function pagination(items, page) {
  var perPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;


  var offset = (page - 1) * perPage;

  return items.slice(offset, offset + perPage);
};