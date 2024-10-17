import React from 'react';
import './Input.css';
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};
export const Input = ({ ...props }: InputProps) => {
  return <input {...props} className='input' />;
};
