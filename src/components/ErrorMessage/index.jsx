import compose from 'recompose/compose';
import pure from 'recompose/pure';
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from '../../helpers/CSSModulesHelper';
import styles from './styles.scss';

const enhance = compose(
  pure,
  CSSModules(styles)
);

const propTypes = {
  message: PropTypes.string.isRequired,
};

function ErrorMessage({ message }) {
  return <div styleName="ErrorMessage">{message}</div>;
}

ErrorMessage.propTypes = propTypes;

export default enhance(ErrorMessage);
