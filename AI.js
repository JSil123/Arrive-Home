import React from 'react';

const AIAgent = ({ name, avatar, status }) => {
  return (
    <div>
      <h2>AI Assistant</h2>
      <div>
        <img src={avatar} alt="AI Assistant" />
        <h3>{name}</h3>
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default AIAgent;
