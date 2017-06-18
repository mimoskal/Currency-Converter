import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import Cols from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<Cols>', () => {
  const component = shallow(<Cols>Test</Cols>);
  const child = shallow(component.get(0));

  it('should render div element', () => {
    expect(child.type()).to.equal('div');
  });

  it('should have prop children', () => {
    expect(child.children).to.exist();
  });
});
