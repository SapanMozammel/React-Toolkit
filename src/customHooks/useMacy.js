import Macy from 'macy';
import { useEffect, useRef } from 'react';

export const useMacy = (containerRef, options, childCount) => {
  const macyRef = useRef();

  useEffect(() => {
    const macyOptions = {
      container: containerRef.current,
      ...options,
    };
    macyRef.current = Macy(macyOptions);
    return () => {
      macyRef.current;
    };
  }, [options, containerRef]);

  useEffect(() => {
    macyRef.current.reInit();
  }, [childCount]);

  return { macy: macyRef.current };
};
