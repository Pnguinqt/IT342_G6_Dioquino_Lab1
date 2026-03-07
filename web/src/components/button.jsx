
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', disabled = false, ...props }) => {
  let defaultClassName = '';

  switch (variant) {
    case 'primary':
      defaultClassName = 'bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-200';
      break;
    case 'secondary':
      defaultClassName = 'bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition duration-200';
      break;
    case 'tertiary':
      defaultClassName = 'bg-transparent hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded border border-gray-300 transition duration-200';
      break;
    default:
      defaultClassName = 'bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-200';
  }

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={`${defaultClassName} ${disabledClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;