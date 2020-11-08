import React from 'react';
import './Heading2.scss';

interface Heading2PropsTypes {
  children: string;
  className: string;
  customStyle: React.HTMLAttributes<HTMLHeadingElement>;
}
const Heading2 = ({ children, className, customStyle }: Heading2PropsTypes) => {
  return (
    <h2
      className={className ? `heading2 ${className}` : 'heading2'}
      style={customStyle}
    >
      {children}
    </h2>
  );
};

export default Heading2;
