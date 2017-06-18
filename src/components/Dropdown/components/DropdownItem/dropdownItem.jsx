import React from 'react';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import { describe, it } from 'mocha';
import { shallow } from 'enzyme';
import Input from './index';

const expect = chai.expect;
chai.use(dirtyChai);

describe('<Input>', () => {
  const props = {
    onChange: function handleChange() {
      return false;
    },
    name: 'input'
  };

  const component = shallow(<Input {...props} />);
  it('should render html input', () => {
    expect(component.type()).to.equal('input');
  });

  it('should have props', () => {
    expect(component.props().value).to.exist();
    expect(component.props().type).to.exist();
    expect(component.props().onChange).to.exist();
    expect(component.props().placeholder).to.exist();
    expect(component.props().name).to.exist();
  });
});
