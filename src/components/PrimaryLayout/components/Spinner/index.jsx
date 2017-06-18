import React from 'react';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import CSSModules from '../../../../helpers/CSSModulesHelper';
import styles from './styles.scss';

const enhance = compose(
  pure,
  CSSModules(styles)
);


function Spinner() {
  return (
    <div styleName="SpinnerWrapper">
      <span styleName="Text">Loading...</span>
      <span styleName="Spinner" />
    </div>
  );
}

export default enhance(Spinner);
