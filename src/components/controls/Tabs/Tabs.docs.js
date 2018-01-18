import React, { PureComponent } from 'react';
import Tabs from './Tabs';

export default class extends PureComponent {

  state = {
    active: 'timeslots',
  };

  render() {

    return (
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Tabs
          tabs={[
            { id: 'timeslots', name: 'Time slots' },
            { id: 'hotscreens', name: 'Hot Screens' },
          ]}
          active={this.state.active}
          onChange={active => this.setState({ active })}
        />
      </div>
    );

  }

}
