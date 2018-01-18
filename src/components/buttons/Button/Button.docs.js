import React from 'react';
import { Skin } from 'react-markup-components';
import ShareIcon from '../../icons/Share';
import CloseIcon from '../../icons/Close';
import PlusIcon from '../../icons/Plus';
import Button from './Button';

export default () => (
  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <br />
    <div style={{ padding: '10px' }}>
      <Button
        mod="primary"
        loading
        size="m"
      >
        Primary loading
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        mod="primary"
        size="l"
      >
        Primary
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        mod="icon"
        icon={<CloseIcon />}
      />
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        mod="primary"
        icon={<PlusIcon />}
        round="round"
      />
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        size="l"
        mod="secondary"
        smart
        onClick={() => new Promise(resolve => setTimeout(resolve, 1000))}
      >
        Secondary
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        size="l"
        mod="secondary"
        disabled
      >
        Secondary disabled
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        size="l"
        mod="primary"
        round="big"
      >
        Round primary
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        size="l"
        mod="primary"
        round="big"
        disabled
      >
        Round primary disabled
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        size="l"
        mod="secondary"
        round="big"
      >
        Round secondary
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        size="l"
        mod="tertiary"
        round="big"
      >
        Round tertiary
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        mod="tertiary"
        size="l"
      >
        Tertiary
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        mod="textMod"
      >
        Text Mod
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        mod="tertiary"
        size="l"
        icon={<ShareIcon style={{ marginLeft: '-8px', marginRight: '8px' }} />}
      >
        With icon
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        mod="tertiary"
        disabled
        size="l"
        icon={<ShareIcon style={{ marginLeft: '-8px', marginRight: '8px' }} />}
      >
        With icon disabled
      </Button>
    </div>
    <div style={{ padding: '10px' }}>
      <Button
        mod="text"
        size="l"
      >
        Text common
      </Button>
    </div>
  </div>
);
