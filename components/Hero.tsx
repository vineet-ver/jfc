"use client";

import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const pts = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
    }));
    setParticles(pts);
  }, []);

  const wordReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
  };

  const words = ["Where", "Capital", "Meets", "Clarity."];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "100px 24px 60px",
      }}
    >
      {/* Animated gradient mesh background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(26,58,107,0.4) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(13,20,38,0.8) 0%, transparent 60%), " +
            "radial-gradient(ellipse 70% 70% at 50% 80%, rgba(10,30,50,0.5) 0%, transparent 60%), " +
            "var(--bg-primary)",
          animation: "meshShift 12s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes meshShift {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(15deg); }
        }
      `}</style>

      {/* Gold Particles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: `${p.y}%`, x: `${p.x}%` }}
            animate={{
              opacity: [0, 0.8, 0.4, 0.8, 0],
              y: [`${p.y}%`, `${p.y - 15}%`, `${p.y - 30}%`],
              x: [`${p.x}%`, `${p.x + (Math.random() - 0.5) * 10}%`],
            }}
            transition={{
              duration: p.duration,
              delay: 1.4 + p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: "var(--gold-primary)",
              boxShadow: `0 0 ${p.size * 3}px var(--gold-glow)`,
            }}
          />
        ))}
      </div>

      {/* Content Grid */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 48,
          alignItems: "center",
        }}
        className="md:!grid-cols-[1.4fr_1fr]"
      >
        {/* Left — Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "var(--gold-primary)",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            TRUSTED BY 2,000+ CLIENTS ACROSS INDIA
          </motion.p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 7vw, 72px)",
              color: "var(--text-primary)",
              lineHeight: 1.05,
              marginBottom: 24,
              fontWeight: 600,
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordReveal}
                initial="hidden"
                animate="visible"
                style={{ display: "inline-block", marginRight: "0.25em" }}
              >
                {word}
                {i === 1 && <br />}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: 520,
              marginBottom: 12,
            }}
          >
            Expert-led financial solutions in loans, investments, real estate, and private funding —
            built for ambition.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 16,
              color: "var(--gold-light)",
              fontStyle: "italic",
              marginBottom: 32,
            }}
          >
            ₹500 Crore+ disbursed. 98.6% approval rate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <a href="#contact" className="btn-gold">
              Get Free Consultation →
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              💬 WhatsApp Now
            </a>
          </motion.div>
        </div>

        {/* Right — Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
          className="glass-card"
          style={{ padding: "32px 28px" }}
        >
          <LeadForm compact />
        </motion.div>
      </div>
    </section>
  );
}
