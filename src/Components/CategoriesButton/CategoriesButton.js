import React from 'react';
import PropTypes from 'prop-types';
import './categoriesButton.scss';

export const CategoriesButton = (props) => {
  const { name, getJoke } = props;

  return (
    <button
      className="phrase-button"
      type="button"
      onClick={getJoke}
    >
      {name}
    </button>
  );
};

CategoriesButton.propTypes = {
  name: PropTypes.string.isRequired,
  getJoke: PropTypes.func.isRequired,
};
