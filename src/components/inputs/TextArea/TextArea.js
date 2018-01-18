import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Label from '../../informers/Label';
import styles from './TextArea.scss';

class TextArea extends PureComponent {

  state = {
    scrollrows: 0,
    isFocused: false,
  };

  componentDidMount() {

    this.recalc();

  }

  componentDidUpdate(prevProps) {

    if (prevProps.value !== this.props.value) {

      this.recalc();

    }

  }

  recalc() {

    const { value } = this.props;

    const height = 36 + ((value && (value.split('\n').length - 1) * 23) || 0);

    this.setState({ // eslint-disable-line
      scrollrows: value ? parseInt(
        ((this.textarea.scrollHeight - height) + 2) / 23,
        10,
      ) : 0,
    });

  }

  onFocus = (e) => {

    const { onFocus } = this.props;

    this.setState({ isFocused: true });

    onFocus(e);

  };

  onBlur = (e) => {

    const { onBlur } = this.props;

    this.setState({ isFocused: false });

    onBlur(e);

  };

  render() {

    const { className, value, label, optional, ...rest } = this.props;

    const height = ((value && (value.split('\n').length - 1) * 23) || 0) + (this.state.scrollrows * 23);

    return (
      <div>
        <Label optional={optional} isFocused={this.state.isFocused}>{label}</Label>
        <textarea
          ref={ref => this.textarea = ref}
          id="text"
          {...rest}
          style={{ height: 36 + height }}
          value={value}
          className={cn(styles.general, className)}
        />
      </div>
    );

  }

}

TextArea.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.node,
  optional: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

TextArea.defaultProps = {
  onFocus() {},
  onBlur() {},
};

export default TextArea;
