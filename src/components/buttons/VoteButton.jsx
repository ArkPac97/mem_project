// src/components/buttons/VoteButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VoteButton = ({ count, icon, isBouncing, onClick, voteType }) => (
  <button className={`vote__btns-${voteType} vote__btn`} onClick={onClick}>
    {count}
    <FontAwesomeIcon icon={icon} className={`${isBouncing ? 'bounce' : ''} icon-margin`} />
  </button>
);

export default VoteButton;
