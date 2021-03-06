import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import PrimaryLayout from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<PrimaryLayout>', () => {
  const component = shallow(<PrimaryLayout>Test</PrimaryLayout>);
  const child = shallow(component.get(0));

  it('should render div element', () => {
    expect(child.type()).to.equal('div');
  });

  it('should render inner div element', () => {
    expect(child.find('div').first().type()).to.equal('div');
  });

  it('should have prop children', () => {
    expect(child.children).to.exist();
  });
});
