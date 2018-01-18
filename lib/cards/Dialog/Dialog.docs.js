'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } },
    _react2.default.createElement(_Dialog2.default, {
      header: 'Delete design?',
      description: 'Deleting a design is permanent. There is no undo.',
      onClose: function onClose() {

        console.log('onClose');
      }
    })
  );
};