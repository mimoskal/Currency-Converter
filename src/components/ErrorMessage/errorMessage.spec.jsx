import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import ErrorMessage from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<ErrorMessage>', () => {
  const component = shallow(<ErrorMessage message="test" />);
  const child = shallow(component.get(0));

  it('should render div element', () => {
    expect(child.type()).to.equal('div');
  });

  it('should have prop children', () => {
    expect(child.children).to.exist();
  });

  it('should have prop message', () => {
    expect(child.instance().props.message).to.exist();
  });
});
