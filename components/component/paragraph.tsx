import React from 'react';

const Para = ({ text }) => {
  const paragraphs = text.split('\n\n');
  
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <>
            <p key={index}>{paragraph}</p>
            <br/>
        </>
      ))}
    </div>
  );
};

export default Para;