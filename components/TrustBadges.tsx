"use client";

import { motion } from "framer-motion";
import { Shield, Award, Lock, FileCheck } from "lucide-react";

const BADGES = [
  { icon: Shield, label: "RBI Regulated Partners" },
  { icon: Award, label: "ISO 9001:2015 Certified" },
  { icon: Lock, label: "256-bit SSL Encrypted" },
  { icon: FileCheck, label: "IRDAI Registered" },
];

export default function TrustBadges() {
  return (
    <section
      style={{
        padding: "56px 24px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        borderBottom: "1px solid rgba(201,168,76,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        {BADGES.map((badge, i) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                opacity: 0.75,
              }}
            >
              <Icon size={20} color="var(--gold-primary)" strokeWidth={1.5} />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                }}
              >
                {badge.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
