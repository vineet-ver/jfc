"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, BarChart3, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const MAGNETS = [
  {
    icon: FileText,
    title: "Free Loan Eligibility Calculator PDF",
    desc: "Know your exact eligibility across 50+ banks instantly.",
    color: "#C9A84C",
  },
  {
    icon: BarChart3,
    title: "2025 Investment Strategy Report",
    desc: "Expert insights on wealth creation for the year ahead.",
    color: "#E8C97E",
  },
];

export default function LeadMagnets() {
  const [showPopup, setShowPopup] = useState<number | null>(null);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      const msg = encodeURIComponent(
        `Hi, I'd like to receive the ${MAGNETS[showPopup ?? 0].title}. My number is ${phone}.`
      );
      window.open(`https://wa.me/919977630730?text=${msg}`, "_blank");
      setShowPopup(null);
      setPhone("");
    }
  };

  return (
    <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <span className="section-label">Free Resources</span>
          <h2 className="section-title">
            Download Your{" "}
            <span style={{ color: "var(--gold-primary)" }}>Free Guides</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {MAGNETS.map((magnet, i) => {
            const Icon = magnet.icon;
            return (
              <motion.div
                key={magnet.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card glass-card-hover"
                style={{ padding: 28, cursor: "pointer", textAlign: "center" }}
                onClick={() => setShowPopup(i)}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "var(--gold-glow)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Icon size={28} color={magnet.color} strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
                >
                  {magnet.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {magnet.desc}
                </p>
                <span
                  className="btn-gold"
                  style={{ marginTop: 16, padding: "10px 24px", fontSize: 13 }}
                >
                  Download Free →
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Phone capture popup */}
      <AnimatePresence>
        {showPopup !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(6px)",
              zIndex: 10000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card"
              style={{
                maxWidth: 400,
                width: "100%",
                padding: 32,
                border: "1px solid var(--gold-primary)",
              }}
            >
              <button
                onClick={() => setShowPopup(null)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "none",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                Get Your Free Report
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  marginBottom: 20,
                  lineHeight: 1.5,
                }}
              >
                Enter your phone number to receive{" "}
                <strong style={{ color: "var(--gold-light)" }}>
                  {MAGNETS[showPopup].title}
                </strong>{" "}
                via WhatsApp.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(5,8,16,0.6)",
                    border: "1px solid rgba(138,143,168,0.2)",
                    borderRadius: 10,
                    color: "var(--text-primary)",
                    fontSize: 15,
                    marginBottom: 12,
                    outline: "none",
                    fontFamily: "var(--font-body)",
                  }}
                  required
                />
                <button type="submit" className="btn-gold" style={{ width: "100%" }}>
                  Send via WhatsApp →
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
