'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkupComponents = require('react-markup-components');

var _Share = require('../../icons/Share');

var _Share2 = _interopRequireDefault(_Share);

var _Close = require('../../icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Plus = require('../../icons/Plus');

var _Plus2 = _interopRequireDefault(_Plus);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', alignItems: 'center', flexDirection: 'column' } },
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          mod: 'primary',
          loading: true,
          size: 'm'
        },
        'Primary loading'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          mod: 'primary',
          size: 'l'
        },
        'Primary'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(_Button2.default, {
        mod: 'icon',
        icon: _react2.default.createElement(_Close2.default, null)
      })
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(_Button2.default, {
        mod: 'primary',
        icon: _react2.default.createElement(_Plus2.default, null),
        round: 'round'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'l',
          mod: 'secondary',
          smart: true,
          onClick: function onClick() {
            return new Promise(function (resolve) {
              return setTimeout(resolve, 1000);
            });
          }
        },
        'Secondary'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'l',
          mod: 'secondary',
          disabled: true
        },
        'Secondary disabled'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'l',
          mod: 'primary',
          round: 'big'
        },
        'Round primary'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'l',
          mod: 'primary',
          round: 'big',
          disabled: true
        },
        'Round primary disabled'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'l',
          mod: 'secondary',
          round: 'big'
        },
        'Round secondary'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          size: 'l',
          mod: 'tertiary',
          round: 'big'
        },
        'Round tertiary'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          mod: 'tertiary',
          size: 'l'
        },
        'Tertiary'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          mod: 'textMod'
        },
        'Text Mod'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          mod: 'tertiary',
          size: 'l',
          icon: _react2.default.createElement(_Share2.default, { style: { marginLeft: '-8px', marginRight: '8px' } })
        },
        'With icon'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          mod: 'tertiary',
          disabled: true,
          size: 'l',
          icon: _react2.default.createElement(_Share2.default, { style: { marginLeft: '-8px', marginRight: '8px' } })
        },
        'With icon disabled'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { padding: '10px' } },
      _react2.default.createElement(
        _Button2.default,
        {
          mod: 'text',
          size: 'l'
        },
        'Text common'
      )
    )
  );
};