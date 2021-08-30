import React from 'react';
import './categoriesButton.scss';

export const CategoriesButton = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, f } = props;

  return (
    <div>
      <button
        className="button is-link is-outlined categories-button"
        type="button"
        onClick={f}
      >
        {name}
      </button>
    </div>
  );
};
