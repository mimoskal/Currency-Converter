import compose from 'recompose/compose';
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import CSSModules from '../../helpers/CSSModulesHelper';
import styles from './styles.scss';

const enhance = compose(
  pure,
  CSSModules(styles)
);

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Headline({ children }) {
  return <h1 styleName="Headline">{children}</h1>;
}

Headline.propTypes = propTypes;

export default enhance(Headline);
