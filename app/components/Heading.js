// Heading.js
import React from 'react';

const Heading = ({ level = 1, children, className = '', style = {} }) => {
  const Tag = `h${level}`; // Dynamically set the tag (h1, h2, etc.)

  return (
    <Tag className={`text-3xl font-bold ${className}`} style={style}>
      {children}
    </Tag>
  );
};

export default Heading;