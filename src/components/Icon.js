import React from 'react';

const Icon = ({ className, children, href }) => {
  return (
    <a href={href || '/'} className={className} >
      {children}
    </a>
  );
};

export default Icon;
