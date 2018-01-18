import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Label from '../../informers/Label';
import styles from './Input.scss';

class Input extends PureComponent {

  state = {
    isFocused: false,
    clearedByFocus: false,
  };

  onFocus = (e) => {

    const { onFocus, onChange, clearByFocus } = this.props;

    this.setState({ isFocused: true });

    if (clearByFocus && !this.state.clearedByFocus) {

      this.setState({ clearedByFocus: true });
      onChange({ ...e, target: { ...e.target, value: '' } });

    }

    onFocus(e);

  };

  onBlur = (e) => {

    const { onBlur } = this.props;

    this.setState({ isFocused: false });

    onBlur(e);

  };

  render() {

    const {
      inputClassName,
      className,
      label,
      error,
      size,
      icon,
      secondary,
      disabled,
      info,
      optional,
      clearByFocus,
      ...rest
    } = this.props;

    return (
      <div className={cn(styles.inputWrap, className)}>
        <Label
          isFocused={this.state.isFocused}
          optional={optional}
          isError={error}
        >
          {label}
        </Label>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        <input
          ref={ref => (this.input = ref)}
          {...rest}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          disabled={disabled}
          className={
            cn(styles.general, {
              [styles.error]: error,
              [styles.disabled]: disabled,
              [styles.iconPadding]: !!icon,
              [styles.secondary]: secondary,
            }, inputClassName, styles[size])
          }
        />
        {error && <div className={styles.warning}>{error}</div>}
        {info && <div className={styles.info}>{info}</div>}
      </div>
    );

  }
}

Input.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string,
  optional: PropTypes.bool,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  error: PropTypes.node,
  secondary: PropTypes.bool,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  info: PropTypes.string,
  clearByFocus: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  size: 'l',
  onFocus() {},
  onBlur() {},
  onChange() {},
};

export default Input;
