"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 500, suffix: " Cr+", prefix: "₹", label: "Disbursed" },
  { value: 2000, suffix: "+", prefix: "", label: "Happy Clients" },
  { value: 98.6, suffix: "%", prefix: "", label: "Approval Rate", decimals: 1 },
  { value: 15, suffix: "+", prefix: "", label: "Years Experience" },
];

function AnimatedCounter({
  value,
  suffix,
  prefix,
  decimals = 0,
  inView,
}: {
  value: number;
  suffix: string;
  prefix: string;
  decimals?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const steps = duration / step;
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span style={{ fontFamily: "var(--font-accent)", fontSize: "clamp(36px, 5vw, 56px)", color: "var(--gold-primary)", lineHeight: 1 }}>
      {prefix}
      {decimals ? count.toFixed(decimals) : Math.floor(count).toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "72px 24px",
        background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          textAlign: "center",
        }}
        className="stats-grid"
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            style={{ padding: "20px 8px" }}
          >
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              decimals={stat.decimals}
              inView={inView}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--text-secondary)",
                marginTop: 8,
                fontWeight: 500,
              }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 767px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
