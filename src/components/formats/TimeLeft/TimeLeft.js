import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const hotTime = 30;

class TimeLeft extends PureComponent {

  static propTypes = {
    live: PropTypes.bool.isRequired,
    minPeriod: PropTypes.number.isRequired,
    maxPeriod: PropTypes.number.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]).isRequired,
    calcSimple: PropTypes.func.isRequired,
    calcShort: PropTypes.func.isRequired,
    calcLong: PropTypes.func.isRequired,
    hotBidFunc: PropTypes.func.isRequired,
    finish: PropTypes.func,
    format: PropTypes.string.isRequired, // 'short' or 'long'
    date: PropTypes.oneOfType(
      [PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date),
      ],
    ).isRequired,
  };

  static defaultProps = {
    live: true,
    finish() {},
    component: 'span',
    minPeriod: 0,
    strongStyle: null,
    secondsStyle: null,
    maxPeriod: Infinity,
    format: 'simple',
    hotBidFunc: function hotBid() { },
    formatterShort: function fos(value, unit, value2, unit2, suffix, firstRun, isSimple = false) {

      let lunit = unit;
      let lunit2 = unit2;
      if (value !== 1 && unit !== 's' && unit !== 'min' && unit !== 'm' && unit !== 'h') {

        lunit += 's';

      }
      if (value2 !== 1 && unit2 !== 's' && unit2 !== 'min' && unit2 !== 'm') {

        lunit2 += 's';

      }
      if (firstRun) {

        const valunit2 = (value2 > 0 ? (`${value2}${isSimple ? '' : ' '}${lunit2} `) : '');
        return `${value}${isSimple ? '' : ' '}${lunit} ${valunit2}${suffix}`;

      }
      return false;

    },
    calcSimple: function cs(then, now, seconds, firstRun) {

      const suffix = then < now ? 'ago' : '';

      let value;
      let unit;
      let value2;
      let unit2;

      if (seconds < 60) {

        value = Math.floor(seconds);
        unit = 's';
        value2 = '';
        unit2 = '';

      } else if (seconds < 60 * 60) {

        value = Math.floor(seconds / 60);
        unit = 'm';
        value2 = Math.round(((seconds / 60) - value) * 60);
        if (value2 === 60) value2 = 0;
        unit2 = 's';

      } else if (seconds < 60 * 60 * 24) {

        value = Math.floor(seconds / (60 * 60));
        unit = 'h';
        value2 = Math.round(((seconds / (60 * 60)) - value) * 60);
        if (value2 === 60) value2 = 0;
        unit2 = 'm';

      } else if (seconds < 60 * 60 * 24 * 7) {

        value = Math.floor(seconds / (60 * 60 * 24));
        unit = 'day';
        value2 = Math.round(((seconds / (60 * 60 * 24)) - value) * 24);
        if (value2 === 24) value2 = 0;
        unit2 = 'hr';

      } else if (seconds < 60 * 60 * 24 * 30) {

        value = Math.floor(seconds / (60 * 60 * 24 * 7));
        unit = 'week';
        value2 = Math.round(((seconds / (60 * 60 * 24 * 7)) - value) * 7);
        if (value2 === 7) value2 = 0;
        unit2 = 'day';

      } else if (seconds < 60 * 60 * 24 * 365) {

        value = Math.floor(seconds / (60 * 60 * 24 * 30));
        unit = 'month';
        value2 = Math.round(((seconds / (60 * 60 * 24 * 30)) - value) * 30);
        unit2 = 'day';

      } else {

        value = Math.floor(seconds / (60 * 60 * 24 * 365));
        unit = 'year';
        value2 = Math.round(((seconds / (60 * 60 * 24 * 365)) - value) * (365 / 30));
        if (value2 === 12) value2 = 0;
        unit2 = 'month';

      }

      return this.formatterShort(value, unit, value2, unit2, suffix, firstRun, true);

    },
    calcShort: function cs(then, now, seconds, firstRun) {

      const suffix = then < now ? 'ago' : 'left';

      let value;
      let unit;
      let value2;
      let unit2;

      if (seconds < 60) {

        value = Math.floor(seconds);
        unit = 's';
        value2 = '';
        unit2 = '';

      } else if (seconds < 60 * 60) {

        value = Math.floor(seconds / 60);
        unit = 'min';
        value2 = Math.round(((seconds / 60) - value) * 60);
        if (value2 === 60) value2 = 0;
        unit2 = 's';

      } else if (seconds < 60 * 60 * 24) {

        value = Math.floor(seconds / (60 * 60));
        unit = 'hr';
        value2 = Math.round(((seconds / (60 * 60)) - value) * 60);
        if (value2 === 60) value2 = 0;
        unit2 = 'min';

      } else if (seconds < 60 * 60 * 24 * 7) {

        value = Math.floor(seconds / (60 * 60 * 24));
        unit = 'day';
        value2 = Math.round(((seconds / (60 * 60 * 24)) - value) * 24);
        if (value2 === 24) value2 = 0;
        unit2 = 'hr';

      } else if (seconds < 60 * 60 * 24 * 30) {

        value = Math.floor(seconds / (60 * 60 * 24 * 7));
        unit = 'week';
        value2 = Math.round(((seconds / (60 * 60 * 24 * 7)) - value) * 7);
        if (value2 === 7) value2 = 0;
        unit2 = 'day';

      } else if (seconds < 60 * 60 * 24 * 365) {

        value = Math.floor(seconds / (60 * 60 * 24 * 30));
        unit = 'month';
        value2 = Math.round(((seconds / (60 * 60 * 24 * 30)) - value) * 30);
        unit2 = 'day';

      } else {

        value = Math.floor(seconds / (60 * 60 * 24 * 365));
        unit = 'year';
        value2 = Math.round(((seconds / (60 * 60 * 24 * 365)) - value) * (365 / 30));
        if (value2 === 12) value2 = 0;
        unit2 = 'month';

      }

      return this.formatterShort(value, unit, value2, unit2, suffix, firstRun);

    },
    calcLong: function cs(then, now, seconds, firstRun) {

      const suffix = then < now ? <span> ago</span> : null;
      let secondsNode = null;
      let minutesNode = null;
      let hoursNode = null;
      let daysNode = null;
      let monthsNode = null;
      let yearsNode = null;
      if (seconds < 2592000) {

        secondsNode = (
          <span style={this.secondsStyle}>
            <span style={this.strongStyle}>{(`0${(seconds % 60)}`).slice(-2)}</span>
            {`second${(seconds > 1 ? 's ' : ' ')}`}
          </span>
        );

      }
      if (seconds > 60) {

        const minutes = Math.floor((seconds % 3600) / 60);
        minutesNode = (
          <span>
            <span style={this.strongStyle}>{minutes}</span>
            {`minute${(minutes > 1 ? 's ' : ' ')}`}
          </span>
        );
        if (seconds > 3600) {

          const hours = Math.floor((seconds % 86400) / 3600);
          hoursNode = (
            <span>
              <span style={this.strongStyle}>{hours}</span>
              {`hour${(hours > 1 ? 's ' : ' ')}`}
            </span>
          );
          if (seconds > 86400) {

            const days = Math.floor((seconds % 2592000) / 86400);
            daysNode = (
              <span>
                <span style={this.strongStyle}>{days}</span>
                {`day${(days > 1 ? 's ' : ' ')}`}
              </span>
            );
            if (seconds > 2592000) {

              const months = Math.floor((seconds % 31104000) / 2592000);
              monthsNode = (
                <span>
                  <span style={this.strongStyle}>{months}</span>
                  {`month${(months > 1 ? 's ' : ' ')}`}
                </span>
              );
              if (seconds > 31536000) {

                const year = Math.floor(seconds / 31536000);
                yearsNode = (
                  <span>
                    <span style={this.strongStyle}>{year}</span>
                    {`year${(year > 1 ? 's ' : ' ')}`}
                  </span>
                );

              }

            }

          }

        }

      }

      if (firstRun) {

        return (
          <span>
            {yearsNode} {monthsNode} {daysNode} {hoursNode} {minutesNode} {secondsNode} {suffix}
          </span>
        );

      }
      return false;

    },
  };

  componentDidMount() {

    if (this.props.live) {

      this.tick(true);

    }

  }

  componentDidUpdate(lastProps) {

    if (this.props.live !== lastProps.live || this.props.date !== lastProps.date) {

      if (!this.props.live && this.timeoutId) {

        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;

      }
      this.tick();

    }

  }

  componentWillUnmount() {

    clearTimeout(this.timeoutId);
    this.timeoutId = undefined;

  }

  timeoutId = 0;
  hot = false;
  firstRun = false;

  tick = (refresh) => {

    if (!this.props.live) {

      return;

    }

    let period = 1000;

    const then = (new Date(this.props.date)).valueOf();
    const now = Date.now();
    const seconds = Math.round(Math.abs(now - then) / 1000);

    if (this.props.format === 'short') {

      if (seconds < 60) {

        period = 1000;

      } else if (seconds < 60 * 60) {

        period = 1000;

      } else if (seconds < 60 * 60 * 24) {

        period = 1000 * 60;

      } else {

        period = 1000 * 60 * 10;

      }

    }

    if (now >= then) {

      this.props.finish();

    }

    if ((now >= then || seconds > hotTime * 60) && this.hot === true) {

      this.props.hotBidFunc(false);
      this.hot = false;

    } else if (now < then && seconds < hotTime * 60 && this.hot === false) {

      this.props.hotBidFunc(true);
      this.hot = true;

    }

    period = Math.min(Math.max(period, this.props.minPeriod), this.props.maxPeriod);

    if (!this.firstRun) period = 10;
    if (period) {

      this.timeoutId = setTimeout(this.tick, period);

    }

    this.firstRun = true;

    if (!refresh) {

      this.forceUpdate();

    }

  };

  render() {

    const then = (new Date(this.props.date)).valueOf();
    const now = Date.now();
    const seconds = Math.round(Math.abs(now - then) / 1000);
    let formatter;

    switch (this.props.format) {
      case 'simple':
        formatter = this.props.calcSimple(then, now, seconds, this.firstRun);
        break;
      case 'long':
        formatter = this.props.calcLong(then, now, seconds, this.firstRun);
        break;
      case 'short':
        formatter = this.props.calcShort(then, now, seconds, this.firstRun);
        break;
      default:
        formatter = this.props.calcShort(then, now, seconds, this.firstRun);
        break;
    }

    const props = { style: this.props.style, className: this.props.className };

    return React.createElement(this.props.component, props, formatter);

  }

}

export default TimeLeft;
