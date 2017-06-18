import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import SmallText from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<SmallText>', () => {
  const component = shallow(<SmallText>Test</SmallText>);
  const child = shallow(component.get(0));

  it('should render p element', () => {
    expect(child.type()).to.equal('p');
  });

  it('should have prop children', () => {
    expect(child.children).to.exist();
  });
});
