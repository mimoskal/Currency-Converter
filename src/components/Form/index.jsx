import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';

const propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function Form({ children, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

Form.propTypes = propTypes;

export default pure(Form);
