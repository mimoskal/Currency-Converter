import compose from 'recompose/compose';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from '../../helpers/CSSModulesHelper';
import styles from './styles.scss';

const enhance = compose(
  onlyUpdateForKeys(['text']),
  CSSModules(styles)
);

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: '',
};

function Button({ text }) {
  return <button styleName="Button">{ text }</button>;
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default enhance(Button);
