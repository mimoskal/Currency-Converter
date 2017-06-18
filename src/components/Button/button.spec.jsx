import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import Button from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<Button>', () => {
  const component = shallow(<Button />);
  const child = shallow(component.get(0));

  it('should render html button', () => {
    expect(child.type()).to.equal('button');
  });

  it('should have prop text', () => {
    expect(child.text).to.exist();
  });
});
