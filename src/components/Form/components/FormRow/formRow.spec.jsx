import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import FormRow from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<FormRow>', () => {
  const component = shallow(<FormRow>Test</FormRow>);
  const child = shallow(component.get(0));

  it('should render div element', () => {
    expect(child.type()).to.equal('div');
  });

  it('should have children', () => {
    expect(child.children).to.exist();
  });
});
