import React from 'react';
import './header.scss';

export const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { icon } = props;

  return (
    <header>
      <img className="logo" src={icon} alt="chuk-icon" />
      <span>Chuck Norris</span>
    </header>
  );
};
