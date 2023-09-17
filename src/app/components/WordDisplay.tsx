import React, { useEffect, useState } from 'react';


const styles = {
  wordDisplay: {
    opacity: 1,
    transition: 'opacity 1s linear',
  },
  fadeOut: {
    opacity: 0,
  },
};

interface WordDisplayProps {
  sentence: string;
  wordInterval: number;
  fadeOutDuration: number;
}

const WordDisplay: React.FC<WordDisplayProps> = ({ sentence, wordInterval, fadeOutDuration }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const words = sentence.split(' ');

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }, wordInterval);
      return () => clearTimeout(timer);
    } else if (currentWordIndex === words.length) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex, words.length, wordInterval]);

  return (
    <div style={{ ...styles.wordDisplay, ...(isFadingOut ? styles.fadeOut : {}) }}>
      {words.slice(0, currentWordIndex).join(' ')}
    </div>
  );
};
export default WordDisplay;