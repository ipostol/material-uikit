import React from 'react';
import { Skin } from 'react-markup-components';
import Tooltip from './Tooltip';

export default () => (
  <Skin>
    <Tooltip
      placement="rightTop"
      overlayClassName="some"
      trigger="click"
      animation="zoom"
      align={{ offset: [8, -22] }}
      overlay={
        <div
          style={{
            width: 300,
            height: 300,
            background: 'red',
          }}
        >
          123
        </div>
      }
    >
      <span>Something text</span>
    </Tooltip>
  </Skin>
);
