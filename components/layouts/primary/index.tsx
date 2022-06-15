import React from 'react';

interface PrimaryLayoutProps {
  children: any;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default PrimaryLayout;
