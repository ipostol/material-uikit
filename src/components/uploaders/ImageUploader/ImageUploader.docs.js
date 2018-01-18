import React from 'react';
import { Skin } from 'react-markup-components';
import ImageUploader from './ImageUploader';

export default () => (
  <Skin>
    <label htmlFor="logo_upload">Upload</label>
    <ImageUploader
      id="logo_upload"
      onUpload={() => console.log('onUpload')}
      onUploadSuccess={e => console.log('onUploadSuccess', e)}
    />
  </Skin>
);
