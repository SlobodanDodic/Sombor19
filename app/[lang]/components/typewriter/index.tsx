import type { ITypewriter } from "../../types";
import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay, className }: ITypewriter) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <h1 className={className}>{currentText}</h1>;
};

export default Typewriter;
