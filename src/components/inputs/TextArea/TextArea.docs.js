import React, { PureComponent } from 'react';
import { Skin } from 'react-markup-components';
import TextArea from './TextArea';

class TextAreaDocs extends PureComponent {

  state = {
    value: '',
  };

  render() {

    return (
      <Skin>
        <div style={{ height: '100%' }} >
          <TextArea
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            label="Ololo"
            optional
          />
        </div>
      </Skin>
    );

  }

}

export default TextAreaDocs;
