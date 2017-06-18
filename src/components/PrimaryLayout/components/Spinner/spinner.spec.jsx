import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import Spinner from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<Spinner>', () => {
  const component = shallow(<Spinner />);
  it('should render div element', () => {
    expect(component.type()).to.equal('div');
  });

  it('should have prop children', () => {
    expect(component.children).to.exist();
  });
});
