import React from 'react';

const IconLink = ({ className, children, href }) => {
  return (
    <a href={href || '/'} className={className} >
      {children}
    </a>
  );
};

export default IconLink;
