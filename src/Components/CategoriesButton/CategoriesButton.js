import React from 'react';
import PropTypes from 'prop-types';
import './categoriesButton.scss';

export const CategoriesButton = (props) => {
  const { name, getRandomJoke } = props;

  return (
    <button
      className="phrase-button"
      type="button"
      onClick={getRandomJoke}
    >
      {name}
    </button>
  );
};

CategoriesButton.propTypes = {
  name: PropTypes.string.isRequired,
  getRandomJoke: PropTypes.func.isRequired,
};
