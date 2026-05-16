"use client";

import { useEffect, useState } from "react";

const WORDS = ["성장하는", "차분한", "꾸준한", "도전하는", "긍정적인"];

export default function FlipText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="flip-container">
      <span key={index} className="flip-text">
        {WORDS[index]}
      </span>
    </span>
  );
}
