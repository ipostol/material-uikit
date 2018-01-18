import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Dropdown.scss';

class Dropdown extends PureComponent {

  state = {
    isOpened: false,
  };

  componentWillUnmount() {

    document.removeEventListener('click', this.listener);
    document.removeEventListener('dragstart', this.listener);

  }

  listener = () => this.close();

  open = () => {

    const { onOpen } = this.props;

    this.setState({ isOpened: true }, onOpen);
    document.addEventListener('click', this.listener);
    document.addEventListener('dragstart', this.listener);

  };

  close = () => {

    const { onClose } = this.props;

    this.setState({ isOpened: false }, onClose);
    document.removeEventListener('click', this.listener);
    document.removeEventListener('dragstart', this.listener);

  };

  render() {

    const {
      trigger,
      children,
      className,
      onOpen,
      onClose,
      onRight,
      onTop,
      contentWidth,
      ...rest
    } = this.props;

    return (
      <div
        className={cn(styles.general, className)}
        ref={ref => (this.general = ref)}
        {...rest}
      >
        <div onClick={this.open}>{trigger}</div>
        {
          this.state.isOpened && (
            <div
              className={cn(
                styles.content,
                onRight ? styles.right : styles.left,
                { [styles.top]: onTop },
              )}
              style={contentWidth && { width: contentWidth }}
            >
              {children}
            </div>
          )
        }
      </div>
    );

  }

}

Dropdown.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.node,
  children: PropTypes.node,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onRight: PropTypes.bool,
  onTop: PropTypes.bool,
  contentWidth: PropTypes.any,
};

export default Dropdown;
