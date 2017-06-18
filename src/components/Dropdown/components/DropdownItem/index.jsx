import compose from 'recompose/compose';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from '../../../../helpers/CSSModulesHelper';
import styles from './styles.scss';

const enhance = compose(
  onlyUpdateForKeys(['item', 'active']),
  CSSModules(styles, { allowMultiple: true })
);

const propTypes = {
  item: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  active: false,
};

function DropdownItem({ item, active, onChange }) {
  function handleClick(e) {
    e.preventDefault();
    onChange(item);
  }

  return (
    <li styleName="DropdownItem">
      <button onClick={handleClick} styleName={`DropdownButton ${active ? 'active' : ''}`}>
        {item}
      </button>
    </li>
  );
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default enhance(DropdownItem);
