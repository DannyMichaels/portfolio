import { useEffect } from 'react';

export default function ScrollToTopOnMount() {
  useEffect(() => {
    window.onbeforeunload = () => {
      // this is for page refresh
      window.scrollTo(0, 0);
    };

    window.scrollTo(0, 0); // for component change (no different pages yet in this app though...)
  }, []);

  return null;
}
