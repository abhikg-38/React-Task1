import React, { useState } from 'react';

function C1() {
  const [wordCount, setWordCount] = useState(0);

  const count = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  const containerStyle = {
    boxShadow: '1px 1px 1px grey',
    width: 450,
    height: 450,
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "35%"
  };

  const inputStyle = {
    width: 250,
    height: 30,
    borderRadius: '25px',
    fontSize: '16px',
    padding: '5px',
    marginBottom: '10px',
  };

  const wordCountStyle = {
    fontSize: '20px',
  };

  return (
    <div style={containerStyle}>
      <h3>Responsive Paragraph Word</h3>
      <h3>Counter</h3>
      <input
        type="text"
        style={inputStyle}
        onKeyDown={count}
      />
      <p>
        Word Count: <span id="co" style={wordCountStyle}>{wordCount}</span>
      </p>
    </div>
  );
}

export default C1;