import React from 'react';

const Display = ({ value }) => {
  return (
    <div className="display">
      <div className="current-value">{value}</div>
    </div>
  );
};

export default Display;