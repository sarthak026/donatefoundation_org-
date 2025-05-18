
import React, { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ 
  children, 
  className = "", 
  id,
  fullWidth = false
}) => {
  return (
    <div id={id} className={`${fullWidth ? 'w-full' : 'container mx-auto px-4'} section-padding ${className}`}>
      {children}
    </div>
  );
};

export default ContentContainer;
