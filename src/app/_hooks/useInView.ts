import { useEffect, useState } from "react";

const useInView = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    };

    if (observer) {
      observer.disconnect();
    }

    if (ref.current) {
      const _observer = new IntersectionObserver(handleIntersect, options);
      _observer.observe(ref.current);
      setObserver(_observer);
    }
  }, [ref.current, options.rootMargin, options.threshold, options.root]); // eslint-disable-line

  useEffect(() => {
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); // eslint-disable-line

  return isIntersecting;
};

export default useInView;
