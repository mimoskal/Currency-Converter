import compose from 'recompose/compose';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from '../../../../helpers/CSSModulesHelper';
import styles from './styles.scss';

const enhance = compose(
  onlyUpdateForKeys(['value', 'placeholder', 'valid']),
  CSSModules(styles, { allowMultiple: true })
);

const propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  valid: PropTypes.bool,
};

const defaultProps = {
  type: 'text',
  value: '',
  valid: true,
};

function Input({ type, name, value, onChange, valid, ...rest }) {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      styleName={`Input ${valid ? '' : 'invalid'}`}
      {...rest}
    />
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default enhance(Input);
