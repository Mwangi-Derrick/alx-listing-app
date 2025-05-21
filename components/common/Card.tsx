import React from 'react';

import {CardProps} from "../../interfaces/index"

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={`card ${className || ''}`}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;