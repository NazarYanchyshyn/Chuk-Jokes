import React from 'react';
import './phrase.scss';
import PropTypes from 'prop-types';
import chuck from '../../img/clipart1131480 1.png';

export const Phrase = (props) => {
  const { phrase } = props;

  return (
    <div className="chuck-img-container">
      <img className="chuck-img" src={chuck} alt="Chuck" />
      <div className="phrase-container">
        <span className="phrase">{phrase}</span>
      </div>
    </div>
  );
};

Phrase.propTypes = {
  phrase: PropTypes.string.isRequired,

};
