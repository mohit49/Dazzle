import React from 'react';


const SectionContainer = ({ children, className = '', id = '', style = {} }) => {
  return (
    <section className={`section-container ${className}`} id={id} style={style}>
      {children}
    </section>
  );
};

export default SectionContainer;