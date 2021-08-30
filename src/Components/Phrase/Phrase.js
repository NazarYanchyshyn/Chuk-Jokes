import React from 'react';
import './phrase.scss';

export const Phrase = (props) => {
  // eslint-disable-next-line react/prop-types
  const { phrase } = props;

  return (
    <div className="phrase-container">
      <span className="phrase">{phrase}</span>
    </div>
  );
};
