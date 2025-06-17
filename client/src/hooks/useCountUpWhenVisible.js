import { useEffect, useRef, useState } from 'react';

export const useCountUpWhenVisible = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const increment = end / (duration / 30);
          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(interval);
              setCount(end);
            } else {
              setCount(Math.ceil(start));
            }
          }, 30);

          setHasAnimated(true); // ensure it runs only once
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  return { count, ref };
};
