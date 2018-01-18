import React, { PureComponent } from 'react';
import cn from 'classnames';
import ImageUploader from '../../uploaders/ImageUploader';
import UploadIcon from '../../icons/Upload';
import Loader from '../../loaders/Loader';
import styles from './AddImageSquare.scss';

const Loading = ({ className }) => (
  <div className={cn(styles.container, className, styles.loading)}>
    <Loader status="loading" />
  </div>
);

class AddImageSquare extends PureComponent {

  state = {
    dragging: 0,
  };

  enter = () => this.setState({ dragging: this.state.dragging + 1 });

  leave = () => this.setState({ dragging: this.state.dragging - 1 });

  drop = (e) => {

    e.preventDefault();

    this.setState({
      dragging: 0,
    });

    this.imgUploader.upload(e.dataTransfer.files);

  };

  render() {

    const { isLoading, className, htmlFor, onUpload, onUploadSuccess } = this.props;

    if (isLoading) {

      return (
        <Loading className={className} />
      );

    }

    return (
      <label
        className={cn(styles.container, { [styles.dragging]: this.state.dragging > 0 }, className)}
        htmlFor="upload"
        onDragOver={e => e.preventDefault()}
        onDragEnter={this.enter}
        onDragLeave={this.leave}
        onDrop={this.drop}
      >
        <UploadIcon className={styles.icon} />
        <div className={styles.text}>
          Drag and drop your screens anywhere or choose file
        </div>
        <ImageUploader
          ref={ref => this.imgUploader = ref}
          accept="image/*,video/*"
          id="upload"
          onUpload={onUpload}
          onUploadSuccess={onUploadSuccess}
          resolutions={['1440x60']}
        />
      </label>
    );

  }

}

export default AddImageSquare;
