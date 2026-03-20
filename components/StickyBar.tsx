"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 90,
            background: "linear-gradient(90deg, var(--bg-card) 0%, rgba(26,58,107,0.3) 100%)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--glass-border)",
            padding: "8px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            fontSize: 13,
            flexWrap: "wrap",
          }}
          className="hidden md:flex"
        >
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
            🏆 India&apos;s Most Trusted Financial Consultancy — Get Your Free Consultation Today
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <a
              href="#contact"
              style={{
                padding: "6px 18px",
                background: "linear-gradient(135deg, var(--gold-primary), var(--gold-light))",
                color: "var(--bg-primary)",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: 12,
                fontFamily: "var(--font-heading)",
                textDecoration: "none",
              }}
            >
              Apply Now
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "6px 18px",
                border: "1px solid var(--glass-border)",
                color: "var(--gold-light)",
                borderRadius: 50,
                fontWeight: 600,
                fontSize: 12,
                fontFamily: "var(--font-heading)",
                textDecoration: "none",
              }}
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
