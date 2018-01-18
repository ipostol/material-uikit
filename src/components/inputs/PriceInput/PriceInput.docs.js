import React, { PureComponent } from 'react';
import { Skin } from 'react-markup-components';
import PriceInput from './PriceInput';

export default class extends PureComponent {

  state = {
    value: 100,
  };

  onChange = value => this.setState({ value });

  render() {

    return (
      <Skin>
        <PriceInput onChange={this.onChange} value={this.state.value} />
      </Skin>
    );

  }

}
