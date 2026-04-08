import React, { useEffect, useRef } from 'react';
import './HeroLetters.css';

const HeroLetters = ({ text = "LEKASREE" }) => {
  const heroRef = useRef(null);
  const letters = text.split("");

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;

      const spans = hero.querySelectorAll(".zoom-letter");

      const heroTop = hero.offsetTop;
      const heroHeight = hero.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let scrollFraction =
        (scrollY - heroTop + windowHeight) /
        (heroHeight + windowHeight);

      scrollFraction = Math.min(Math.max(scrollFraction, 0), 1);

      const totalLetters = letters.length;

      spans.forEach((span, idx) => {
        const offset =
          (idx - (totalLetters - 1) / 2) * 80 * scrollFraction;

        const scale = 1 + 0.6 * scrollFraction;

        span.style.transform = `translateX(${offset}px) scale(${scale})`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [letters]);

  return (
    <div className="hero" ref={heroRef} id="home">
      <h1>
        {letters.map((letter, idx) => (
          <span key={idx} className="zoom-letter">
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default HeroLetters;