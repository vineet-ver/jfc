"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Time-based trigger: 40 seconds
    const timer = setTimeout(() => {
      if (!dismissed) setShow(true);
    }, 40000);

    // Exit intent (mouse leaves viewport top)
    const handleExit = (e: MouseEvent) => {
      if (e.clientY < 5 && !dismissed) {
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handleExit);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleExit);
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleDismiss}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card"
            style={{
              maxWidth: 480,
              width: "100%",
              padding: "40px 32px",
              textAlign: "center",
              border: "1px solid var(--gold-primary)",
              boxShadow: "0 0 60px var(--gold-glow)",
            }}
          >
            <div
              style={{
                fontSize: 48,
                marginBottom: 16,
                animation: "float 2s ease-in-out infinite",
              }}
            >
              📄
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                color: "var(--text-primary)",
                lineHeight: 1.3,
                marginBottom: 12,
              }}
            >
              Wait — Are You Leaving Without Your Free Loan Report?
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: 28,
              }}
            >
              Our experts have helped 2,000+ clients get approval in 48 hours. Get your free
              eligibility report now.
            </p>
            <a
              href={getWhatsAppUrl("popup")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ width: "100%" }}
            >
              💬 Chat on WhatsApp
            </a>
            <button
              onClick={handleDismiss}
              style={{
                display: "block",
                margin: "16px auto 0",
                background: "none",
                border: "none",
                color: "var(--text-secondary)",
                fontSize: 13,
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Maybe later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
