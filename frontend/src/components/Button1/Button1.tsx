import React from 'react';
import './Button1.scss';

interface Button1PropsTypes {
  children: string;
  className?: string;
}

const Button1 = ({ children, className }: Button1PropsTypes) => {
  return <button className={`btn1-container ${className}`}>{children}</button>;
};

export default Button1;
