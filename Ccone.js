import React, { useState } from 'react';

function Display() {
  const [inputText, setInputText] = useState('');

  const handle = (event) => {
    const text = event.target.value;
    setInputText(text);
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handle}
        placeholder="Type here"
      />
      <p>Current Value: {inputText}</p>
    </div>
  );
}

export default Display;
