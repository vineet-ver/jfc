"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Building2, TrendingUp, Home, Rocket, PiggyBank } from "lucide-react";
import EMICalculator from "./EMICalculator";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const SERVICES = [
  {
    id: "loan",
    icon: Building2,
    title: "Loan Services",
    short: "Personal, Business, Home & Vehicle loans with best rates.",
    wide: true,
    waKey: "loan",
    details:
      "We partner with 50+ banks and NBFCs to get you the best loan deals. Personal loans from 10.5%, business loans with minimal documentation, home loans with lowest EMIs, and vehicle financing with instant approval.",
    features: ["Pre-approved offers", "Minimal documentation", "Quick disbursement", "Best interest rates"],
    hasCalculator: true,
  },
  {
    id: "investment",
    icon: TrendingUp,
    title: "Financial Planning",
    short: "Mutual funds, SIPs, insurance & wealth management.",
    tall: true,
    waKey: "investment",
    details:
      "Our SEBI-registered advisors create personalized investment strategies. From SIPs starting ₹500/month to portfolio management for HNIs, we cover all your wealth creation needs.",
    features: ["SEBI registered advisors", "Personalized portfolio", "Tax-saving strategies", "Regular reviews"],
  },
  {
    id: "realestate",
    icon: Home,
    title: "Real Estate",
    short: "Property financing, valuation & investment advisory.",
    waKey: "realestate",
    details:
      "End-to-end real estate financial solutions. Property valuation, home loan processing, LAP (Loan Against Property), and real estate investment advisory for maximum returns.",
    features: ["Property valuation", "LAP processing", "Investment advisory", "Legal assistance"],
  },
  {
    id: "funding",
    icon: Rocket,
    title: "Private Funding",
    short: "Startup capital, venture debt & growth financing.",
    waKey: "funding",
    details:
      "Specialized funding solutions for startups and growing businesses. We connect you with angel investors, venture debt providers, and alternative lending platforms.",
    features: ["Angel network access", "Venture debt", "Revenue-based financing", "Growth capital"],
  },
  {
    id: "retirement",
    icon: PiggyBank,
    title: "Retirement Planning",
    short: "NPS, pension plans & retirement corpus building.",
    tall: true,
    waKey: "investment",
    details:
      "Secure your golden years with our comprehensive retirement planning. We help you build the right corpus through NPS, pension plans, annuities, and systematic withdrawal plans.",
    features: ["NPS optimization", "Pension plans", "Annuity advisory", "Corpus calculation"],
  },
];

export default function ServicesBento() {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const activeService = SERVICES.find((s) => s.id === activeDrawer);

  return (
    <section id="services" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span className="section-label">Our Expertise</span>
          <h2 className="section-title" style={{ margin: "0 auto" }}>
            Financial Solutions,{" "}
            <span style={{ color: "var(--gold-primary)" }}>Tailored for You</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "8px auto 0" }}>
            From loans to investments — we provide end-to-end financial services with personalized
            attention.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "minmax(200px, auto)",
            gap: 20,
          }}
          className="bento-grid"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card glass-card-hover"
                onClick={() => setActiveDrawer(service.id)}
                style={{
                  padding: 28,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  ...(service.wide ? { gridColumn: "span 2" } : {}),
                  ...(service.tall ? { gridRow: "span 2" } : {}),
                }}
              >
                <div>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "var(--gold-glow)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={24} color="var(--gold-primary)" strokeWidth={1.5} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 8,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {service.short}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 16,
                    color: "var(--gold-primary)",
                    fontSize: 13,
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                  }}
                >
                  Explore <ArrowRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Responsive bento grid styles */}
      <style>{`
        @media (max-width: 1023px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bento-grid > * {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
        @media (max-width: 639px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Side Drawer */}
      <AnimatePresence>
        {activeDrawer && activeService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDrawer(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
                zIndex: 200,
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(480px, 90vw)",
                background: "var(--bg-card)",
                borderLeft: "1px solid var(--glass-border)",
                zIndex: 201,
                padding: 36,
                overflowY: "auto",
              }}
            >
              <button
                onClick={() => setActiveDrawer(null)}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  background: "none",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                }}
              >
                <X size={24} />
              </button>

              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "var(--gold-glow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <activeService.icon size={28} color="var(--gold-primary)" strokeWidth={1.5} />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  color: "var(--text-primary)",
                  marginBottom: 12,
                }}
              >
                {activeService.title}
              </h3>

              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                {activeService.details}
              </p>

              <div style={{ marginBottom: 28 }}>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--gold-primary)",
                    letterSpacing: "0.08em",
                    marginBottom: 12,
                    textTransform: "uppercase",
                  }}
                >
                  Key Features
                </h4>
                {activeService.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 0",
                      fontSize: 14,
                      color: "var(--text-primary)",
                      borderBottom: "1px solid rgba(138,143,168,0.1)",
                    }}
                  >
                    <span style={{ color: "var(--gold-primary)" }}>✦</span> {f}
                  </div>
                ))}
              </div>

              {activeService.hasCalculator && <EMICalculator />}

              <a
                href={getWhatsAppUrl(activeService.waKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ width: "100%", marginTop: 24, textAlign: "center" }}
              >
                💬 Enquire on WhatsApp →
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
