import compose from 'recompose/compose';
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import CSSModules from '../../../../../../helpers/CSSModulesHelper';
import styles from './styles.scss';

const enhance = compose(
  pure,
  CSSModules(styles)
);

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

function SwapButton({ onClick }) {
  return <button styleName="SwapButton" onClick={onClick} />;
}

SwapButton.propTypes = propTypes;

export default enhance(SwapButton);
