import React, { useState, useEffect } from 'react';

const LoadingText: React.FC = () => {
  const [dots, setDots] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots + '.';
        }
        return '';
      });
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{
      fontFamily: "Storytime"
    }}>
      <p className="text-xlg">Loading{dots}</p>
    </div>
  );
};

export default LoadingText;