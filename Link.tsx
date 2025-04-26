import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  ...props 
}) => {
  const isExternal = href.startsWith('http');
  
  const baseStyles = "transition-colors duration-200";
  const internalStyles = "nav-link hover:text-primary";
  
  const combinedClassName = `${baseStyles} ${className}`;
  
  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClassName} 
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <a 
      href={href} 
      className={combinedClassName} 
      {...props}
    >
      {children}
    </a>
  );
};