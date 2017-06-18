import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import Box from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<Box>', () => {
  const component = shallow(<Box>test</Box>);
  const child = shallow(component.get(0));

  it('should render div element', () => {
    expect(child.type()).to.equal('div');
  });

  it('should have prop children', () => {
    expect(child.children).to.exist();
  });
});
