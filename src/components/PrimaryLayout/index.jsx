import compose from 'recompose/compose';
import React from 'react';
import PropTypes from 'prop-types';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import CSSModules from '../../helpers/CSSModulesHelper';
import Spinner from './components/Spinner';
import styles from './styles.scss';

const enhance = compose(
  onlyUpdateForKeys(['isLoading']),
  CSSModules(styles)
);

const propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

const defaultProps = {
  isLoading: false,
};

function PrimaryLayout({ children, isLoading }) {
  return (
    <div styleName="PrimaryLayout">
      <div styleName="PrimaryLayoutInner">
        { isLoading ? <Spinner /> : null }
        {children}
      </div>
    </div>
  );
}

PrimaryLayout.propTypes = propTypes;
PrimaryLayout.defaultProps = defaultProps;

export default enhance(PrimaryLayout);
