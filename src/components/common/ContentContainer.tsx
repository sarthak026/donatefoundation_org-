
import React, { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ 
  children, 
  className = "", 
  id 
}) => {
  return (
    <div id={id} className={`section-padding ${className}`}>
      {children}
    </div>
  );
};

export default ContentContainer;
