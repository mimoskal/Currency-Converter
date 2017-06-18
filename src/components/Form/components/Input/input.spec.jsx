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
  const child = shallow(component.get(0));

  it('should render html input', () => {
    expect(child.type()).to.equal('input');
  });

  it('should have props', () => {
    expect(child.props().value).to.exist();
    expect(child.props().type).to.exist();
    expect(child.props().onChange).to.exist();
    expect(child.props().name).to.exist();
  });
});
