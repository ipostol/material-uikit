import React, { PureComponent } from 'react';
import { Skin } from 'react-markup-components';
import TimeInput from './TimeInput';

export default class extends PureComponent {

  state = {
    value: '',
  };

  changeValue = value => this.setState({ value });

  render() {

    return (
      <Skin>
        <TimeInput value={this.state.value} onChange={this.changeValue} />
      </Skin>
    );

  }

}
