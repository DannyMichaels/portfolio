import { useEffect } from 'react';

const useResize = (cb, ...deps) => {
  useEffect(() => {
    window.addEventListener('resize', cb);
    return () => window.removeEventListener('resize', cb);
  }, [cb, deps]);
};

export default useResize;
