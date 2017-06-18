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

function FormRow({ children, ...rest }) {
  return (
    <div styleName="FormRow" {...rest}>
      { children }
    </div>
  );
}

FormRow.propTypes = propTypes;

export default enhance(FormRow);
