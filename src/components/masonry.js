import React, { useRef } from 'react';
import { useMacy } from '../customHooks/useMacy';

export const Masonry = ({ children, options = {} }) => {
  const containerRef = useRef();
  const childCount = React.Children.count(children);
  useMacy(containerRef, options, childCount);

  return (
    <div
      ref={containerRef}
      className={'masonry-container'}>
      {children}
    </div>
  );
};
