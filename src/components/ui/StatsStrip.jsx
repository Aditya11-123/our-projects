import { useState, useEffect, useRef } from 'react';
import './StatsStrip.css';

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const num = parseInt(target.replace(/\D/g, ''), 10) || 0;
          const duration = 1200;
          const steps = 40;
          const increment = num / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= num) {
              setCount(num);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const rawNum = parseInt(target.replace(/\D/g, ''), 10) || 0;
  const hasPlus = target.includes('+');

  return (
    <span ref={ref} className="stats-strip__value">
      {count}
      {hasPlus && count >= rawNum ? '+' : ''}
      {suffix}
    </span>
  );
}

const STATS = [
  { label: 'Projects Shipped', value: '4+', icon: '🚀' },
  { label: 'Team Members',     value: '6',  icon: '👥' },
  { label: 'Technologies',     value: '20+',icon: '⚡' },
  { label: 'Awards Won',       value: '3',  icon: '🏆' },
];

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-strip__inner container">
        {STATS.map((s, i) => (
          <div key={s.label} className="stats-strip__item animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="stats-strip__icon" aria-hidden="true">{s.icon}</span>
            <CountUp target={s.value} />
            <span className="stats-strip__label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
