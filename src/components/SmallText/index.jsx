import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
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

function SmallText({ children, ...rest }) {
  return (
    <p {...rest}>
      <small styleName="SmallText">
        {children}
      </small>
    </p>
  );
}

SmallText.propTypes = propTypes;

export default enhance(SmallText);
