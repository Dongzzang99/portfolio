//자기소개 애니메이션

"use client";

import { useEffect, useState } from "react";

const WORDS = ["개발자", "신입사원", "착한", "멋있는", "열정있는", "긍정적인"];

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
