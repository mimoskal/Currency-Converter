import compose from 'recompose/compose';
import pure from 'recompose/pure';
import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from '../../../../helpers/CSSModulesHelper';
import styles from './styles.scss';

const enhance = compose(
  pure,
  CSSModules(styles)
);

const propTypes = {
  children: PropTypes.node.isRequired,
};

function Col({ children, ...rest }) {
  return <div styleName="Col" {...rest}>{children}</div>;
}

Col.propTypes = propTypes;

export default enhance(Col);
