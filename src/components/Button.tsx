import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'operator';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'default' }) => {
  const baseClasses = "p-4 text-xl font-bold rounded transition-colors";
  const variantClasses = variant === 'operator' 
    ? "bg-orange-500 text-white hover:bg-orange-600" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  );
};
