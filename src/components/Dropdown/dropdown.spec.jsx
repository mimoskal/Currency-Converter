import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import Dropdown from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<Dropdown>', () => {
  const props = {
    onChange: function handleChange() {
      return false;
    },
    items: ['test'],
    value: 'test',
    name: 'test'
  };

  const component = shallow(<Dropdown {...props} />);
  it('should render div element', () => {
    expect(component.type()).to.equal('div');
  });

  it('should render ul element', () => {
    expect(component.find('ul')).to.exist();
  });

  it('should have props', () => {
    expect(component.instance().props.name).to.exist();
    expect(component.instance().props.value).to.exist();
    expect(component.instance().props.items).to.exist();
    expect(component.instance().props.onChange).to.exist();
  });
});
