import React from 'react';

const Button = ({ children, ...rest }) => {
  return (
    <button class="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
