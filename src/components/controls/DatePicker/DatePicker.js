import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import styles from './DatePicker.scss';

const isSelectingFirstDay = (from, to, day) => {

  const firstDayIsNotSelected = !from;
  const selectedDayIsBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const rangeIsSelected = from && to;

  return (
    firstDayIsNotSelected || selectedDayIsBeforeFirstDay || rangeIsSelected
  );

};

const initialState = {
  from: null,
  to: null,
  enteredTo: null, // Keep track of the last day for mouseEnter.
};

class DatePicker extends PureComponent {

  constructor(props) {

    super(props);
    this.state = initialState;

    if (props.value) {

      if (props.isRange) {

        this.state.from = new Date(props.value[0]);
        this.state.to = new Date(props.value[1]);
        this.state.enteredTo = new Date(props.value[1]);

      } else {

        this.state.from = new Date(props.value);

      }

    }

  }

  onKeyDown = (e) => {

    if (e.keyCode === 27) {

      this.reset();

    }

  };

  handleDayClick = (day) => {

    const { onChange, isRequired, isRange } = this.props;
    const { from, to } = this.state;

    if (!isRequired && DateUtils.isSameDay(day, from)) {

      this.reset();

    } else if (!isRange || isSelectingFirstDay(from, to, day)) {

      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });

      if (!isRange) {

        onChange(day);

      }

    } else {

      this.setState({
        to: day,
        enteredTo: day,
      }, () => {

        if (typeof onChange === 'function') {

          onChange([this.state.from, this.state.to]);

        }

      });

    }

  };

  handleDayMouseEnter = (day) => {

    const { isRange } = this.props;
    const { from, to } = this.state;

    if (isRange && !isSelectingFirstDay(from, to, day)) {

      this.setState({
        enteredTo: day,
      });

    }

  };

  reset = () => {

    const { onChange } = this.props;

    this.setState(initialState);
    onChange(null);

  };

  render() {

    const { initialMonth, disabledDays, isRange } = this.props;
    const { from, enteredTo: to } = this.state;

    return (
      <DayPicker
        onKeyDown={this.onKeyDown}
        classNames={styles}
        numberOfMonths={2}
        selectedDays={isRange ? [from, { from, to }] : [from]}
        disabledDays={disabledDays}
        initialMonth={initialMonth}
        onDayClick={this.handleDayClick}
        onDayMouseEnter={this.handleDayMouseEnter}
      />
    );

  }

}

DatePicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  isRange: PropTypes.bool,
  isRequired: PropTypes.bool,
  disabledDays: PropTypes.object,
  initialMonth: PropTypes.object,
};

DatePicker.defaultProps = {
  onChange() {},
  disabledDays: {
    before: new Date(),
  },
};

export default DatePicker;
