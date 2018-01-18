/* eslint-disable */

const fs = require('fs');
const capitalize = require('capitalize');

const path = process.argv[process.argv.length - 1];
const component = path.split('/').pop();

console.log(component, path, '|||');

const text =
`import React from 'react';
import { shallow } from 'enzyme';
import ${component} from './${component}';

describe('${component} component', () => {

  it('should render correctly', () => {

    const props = {};

    const wrapper = shallow(
      <${component} {...props} />,
    );

    expect(wrapper).toMatchSnapshot();

  });

});
`;

fs.writeFile(`${path}/${component}.test.js`, text, (err) => {
  if (err) throw err;
  console.log('It\'s saved! in same location.');
});
