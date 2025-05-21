import React from 'react';

import {ButtonProps} from "../../interfaces/index"

const Button: React.FC<ButtonProps> = ({ children, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed ${className || ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
