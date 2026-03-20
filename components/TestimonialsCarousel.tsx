"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rajesh Mehta",
    city: "Mumbai",
    review: "Got ₹45L business loan approved in just 3 days. The team handled everything from documentation to disbursement. Absolutely professional!",
    service: "Business Loan",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    city: "Pune",
    review: "Best investment advisor I've ever worked with. They created a diversified portfolio that's given me 18% annual returns consistently.",
    service: "Investment Advisory",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    city: "Ahmedabad",
    review: "Helped me buy my dream property with the lowest interest rate. Their real estate financing expertise is unmatched in the industry.",
    service: "Real Estate",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    city: "Bangalore",
    review: "I was rejected by 3 banks. Jain Financial got my personal loan approved within a week at 11.5% interest. Incredible service!",
    service: "Personal Loan",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    city: "Delhi",
    review: "Their retirement planning service helped me create a ₹2 Cr corpus plan. I feel truly secured about my future now.",
    service: "Retirement Planning",
    rating: 5,
  },
  {
    name: "Ananya Joshi",
    city: "Hyderabad",
    review: "Got startup funding within 2 weeks. They connected me with the right investors and guided me through the entire process.",
    service: "Private Funding",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animFrame: number;
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animFrame = requestAnimationFrame(scroll);
    };
    animFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animFrame);
  }, [isPaused]);

  const items = [...TESTIMONIALS, ...TESTIMONIALS]; // duplicate for infinite scroll

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: "var(--bg-primary)", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            Trusted by <span style={{ color: "var(--gold-primary)" }}>Thousands</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "8px auto 0" }}>
            Hear from clients who transformed their financial future with us.
          </p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          display: "flex",
          gap: 20,
          overflow: "hidden",
          paddingBottom: 8,
          cursor: "grab",
        }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="glass-card"
            style={{
              minWidth: 340,
              maxWidth: 380,
              padding: 28,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 60,
                color: "var(--gold-primary)",
                lineHeight: 0.8,
                marginBottom: 8,
                opacity: 0.5,
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "var(--text-primary)",
                lineHeight: 1.7,
                marginBottom: 20,
                minHeight: 80,
              }}
            >
              {t.review}
            </p>
            <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} fill="var(--gold-primary)" color="var(--gold-primary)" />
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                {t.name}
              </p>
              <p style={{ fontSize: 12, color: "var(--text-secondary)" }}>{t.city}</p>
            </div>
            <span
              style={{
                display: "inline-block",
                marginTop: 12,
                padding: "3px 10px",
                fontSize: 11,
                fontWeight: 600,
                color: "var(--gold-primary)",
                background: "var(--gold-glow)",
                borderRadius: 50,
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.03em",
              }}
            >
              {t.service}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
