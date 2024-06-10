import React from 'react';

const Para = ({ text }) => {
  const paragraphs = text?.split('\n\n');
  
  return (
    <div>
      {paragraphs?.length > 0 ? paragraphs.map((paragraph, index) => (
        <>
            <p key={index}>{paragraph}</p>
            <br/>
        </>
      )) : <p>{text}</p>
    }
    </div>
  );
};

export default Para;