import { useEffect, useState } from 'react';

export const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
};
