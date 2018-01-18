import React from 'react';
import Alert from './Dialog';

export default () => (
  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Alert
      header="Delete design?"
      description="Deleting a design is permanent. There is no undo."
      onClose={() => {

        console.log('onClose');

      }}
    />
  </div>
);
