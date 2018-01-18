import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Ink from 'react-ink';
import styles from './Button.scss';

class Button extends PureComponent {

  state = {
    isLoading: false,
  };

  startLoading = () => this.setState({ isLoading: true });
  endLoading = () => this.setState({ isLoading: false });

  onClick = (e) => {

    const { smart, onClick } = this.props;

    if (smart) {

      const promise = onClick(e);

      if (promise instanceof Promise) {

        this.startLoading();
        promise.then(this.endLoading).catch(this.endLoading);

      }

    } else {

      onClick(e);

    }

  };

  render() {

    const {
      mod,
      size,
      children,
      icon,
      disabled,
      loading: loadingProp,
      className,
      round,
      element: Element,
      width,
      smart,
      ...rest
    } = this.props;

    const loading = loadingProp || this.state.isLoading;

    return (
      <Element
        type={Element === 'button' ? 'button' : undefined}
        {...rest}
        className={
          cn(className, styles.general, styles[mod], styles[size], mod !== 'icon' && styles[round], {
            [styles.disabled]: loading || disabled,
            [styles.loading]: loading,
          })
        }
        style={{
          ...rest.style,
          ...(width ? { width } : {}),
        }}
        disabled={loading || disabled}
        onClick={this.onClick}
      >
        {icon}
        <div className={styles.alignLabel}>{children}</div>
        {!disabled && !loading && <Ink />}
      </Element>
    );

  }

}

Button.propTypes = {
  mod: PropTypes.string,
  round: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.object,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  loading: PropTypes.bool,
  width: PropTypes.number,
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  onClick: PropTypes.func,
  smart: PropTypes.bool,
};

Button.defaultProps = {
  mod: 'secondary',
  element: 'button',
  round: 'small',
  onClick() {},
};

export default Button;
