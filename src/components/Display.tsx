import React from 'react';

interface DisplayProps {
  value: string;
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="w-full p-4 mb-4 text-right bg-gray-800 text-white text-3xl font-mono rounded overflow-hidden">
      {value || '0'}
    </div>
  );
};
