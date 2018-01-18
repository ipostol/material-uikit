'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PagingButton = require('../../buttons/PagingButton');

var _PagingButton2 = _interopRequireDefault(_PagingButton);

var _Pagination = require('./Pagination.scss');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
  var length = _ref.length,
      perPage = _ref.perPage,
      active = _ref.active,
      onChange = _ref.onChange,
      className = _ref.className;


  if (length <= perPage) return null;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_Pagination2.default.general, className) },
    _react2.default.createElement(
      'div',
      { className: _Pagination2.default.text },
      (active - 1) * perPage + 1,
      '-',
      active * perPage,
      ' of ',
      length
    ),
    _react2.default.createElement(_PagingButton2.default, {
      prev: true,
      className: _Pagination2.default.button,
      disabled: active === 1,
      onClick: function onClick() {
        return onChange(active - 1);
      }
    }),
    _react2.default.createElement(_PagingButton2.default, {
      next: true,
      className: _Pagination2.default.button,
      disabled: length / perPage <= active,
      onClick: function onClick() {
        return onChange(active + 1);
      }
    })
  );
};

Pagination.propTypes = {
  onChange: _propTypes2.default.func,
  active: _propTypes2.default.number,
  length: _propTypes2.default.number,
  perPage: _propTypes2.default.number,
  className: _propTypes2.default.string
};

exports.default = Pagination;