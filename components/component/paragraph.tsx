import React from 'react';

const Para = ({ text }) => {
  const paragraphs = text?.split('\n\n');
  
  return (
    <div>
      {paragraphs?.length > 0 ? paragraphs.map((paragraph, index) => (
        <>
            <p className='leading-6' key={index}>{paragraph}</p>
            <br/>
        </>
      )) : <p className='leading-6'>{text}</p>
    }
    </div>
  );
};

export default Para;