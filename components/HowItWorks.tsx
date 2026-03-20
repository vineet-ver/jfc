"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, PhoneCall, FileText, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Submit Your Requirement",
    desc: "Fill a simple form or WhatsApp us. Takes just 30 seconds.",
    time: "30 seconds",
  },
  {
    icon: PhoneCall,
    title: "Expert Reviews & Calls You",
    desc: "A dedicated financial expert reviews your profile and calls you.",
    time: "Within 2 hours",
  },
  {
    icon: FileText,
    title: "Get Your Custom Plan",
    desc: "Receive a personalized financial strategy tailored to your goals.",
    time: "Same day",
  },
  {
    icon: Rocket,
    title: "We Execute. You Grow.",
    desc: "We handle the paperwork, negotiations, and execution. You focus on growth.",
    time: "Ongoing",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span className="section-label">How It Works</span>
          <h2 className="section-title">
            Four Steps to{" "}
            <span style={{ color: "var(--gold-primary)" }}>Financial Freedom</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Vertical Progress Line */}
          <div
            style={{
              position: "absolute",
              left: 24,
              top: 40,
              bottom: 40,
              width: 2,
              background: "rgba(138,143,168,0.15)",
              zIndex: 0,
            }}
            className="timeline-line"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                width: "100%",
                background: "linear-gradient(to bottom, var(--gold-primary), var(--gold-light))",
                borderRadius: 2,
              }}
            />
          </div>

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
                style={{
                  display: "flex",
                  gap: 24,
                  marginBottom: i < STEPS.length - 1 ? 40 : 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: "var(--bg-card)",
                    border: "2px solid var(--gold-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color="var(--gold-primary)" strokeWidth={1.5} />
                </div>
                <div style={{ paddingTop: 4 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "var(--gold-primary)",
                      textTransform: "uppercase",
                    }}
                  >
                    Step {i + 1} — {step.time}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginTop: 4,
                      marginBottom: 6,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 639px) {
          .timeline-line { left: 24px !important; }
        }
      `}</style>
    </section>
  );
}
