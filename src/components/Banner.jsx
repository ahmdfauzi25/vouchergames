import React, { useEffect, useMemo, useRef, useState } from 'react';

export default function Banner({ slides: externalSlides }) {
  const slides = useMemo(() => (
    externalSlides && externalSlides.length
      ? externalSlides
      : [
          { id: 1, image_url: '', colorA: '#22c55e', colorB: '#16a34a' },
          { id: 2, image_url: '', colorA: '#3b82f6', colorB: '#06b6d4' },
          { id: 3, image_url: '', colorA: '#f59e0b', colorB: '#ef4444' },
        ]
  ), [externalSlides]);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const go = (dir) => {
    clearInterval(timerRef.current);
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  return (
    <section className="banner">
      <div className="container banner-frame">
        <button className="banner-nav left" onClick={() => go(-1)} aria-label="Sebelumnya">‹</button>
        <div className="banner-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s) => (
            <div key={s.id} className="banner-slide">
              {s.image_url
                ? <img className="banner-img" src={s.image_url} alt={s.title || 'Promo'} />
                : <div className="banner-img" style={{ background: `linear-gradient(135deg, ${s.colorA}, ${s.colorB})` }} />}
            </div>
          ))}
        </div>
        <button className="banner-nav right" onClick={() => go(1)} aria-label="Berikutnya">›</button>
      </div>
    </section>
  );
}


