import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { upload } from 'bidstack-cloudinary';

class ImageUploader extends PureComponent {

  upload = (filesObj) => {

    const { onUpload, onUploadSuccess, onUploadFail, resolutions } = this.props;
    const files = Array.prototype.map.call(filesObj, file => file);

    const promises = files.map(file => upload(file).then((data) => {

      const { ...result } = data;

      if (!result.error) {

        const resolution = `${result.width}x${result.height}`;

        if (resolutions && !resolutions.includes(resolution)) {

          result.error = { message: 'The picture size of uploaded file is not supported. Please check and try again' };

        } else if (result.resource_type === 'video' && result.duration > 8) {

          result.error = { message: 'Video duration is too long - it should be less than 8 sec. Please check and try again' };

        }

      }

      return result;

    }));

    if (promises.length) {

      const promiseAll = Promise.all(promises);

      promiseAll.then(onUploadSuccess).catch(onUploadFail);

      onUpload(promises.length, promiseAll);

    }

  };

  render() {

    const { id, multiple, accept } = this.props;

    return (
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={e => this.upload(e.target.files)}
        id={id}
        style={{ display: 'none' }}
      />
    );

  }

}

ImageUploader.propTypes = {
  id: PropTypes.string,
  onUpload: PropTypes.func,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  resolutions: PropTypes.array,
  onUploadSuccess: PropTypes.func,
  onUploadFail: PropTypes.func,
};

ImageUploader.defaultProps = {
  onUpload() {},
  accept: 'image/*',
};

export default ImageUploader;
