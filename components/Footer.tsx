"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import LeadForm from "./LeadForm";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--glass-border)",
      }}
    >
      {/* Contact Section */}
      <div
        className="section-padding"
        style={{ paddingBottom: 48 }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Left — Contact Info */}
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Let&apos;s Build Your{" "}
              <span style={{ color: "var(--gold-primary)" }}>Financial Future</span>
            </h2>

            {/* Urgency Pulse */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 28,
                padding: "10px 16px",
                background: "rgba(37,211,102,0.08)",
                borderRadius: 50,
               
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#25D366",
                  animation: "pulse-dot 1.5s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 500 }}>
                3 experts online now — average response: 4 mins
              </span>
            </div>
            <style>{`
              @keyframes pulse-dot {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(1.3); }
              }
              .footer-grid {
                grid-template-columns: 1.2fr 1fr !important;
              }
              @media (max-width: 767px) {
                .footer-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                { icon: MapPin, text: "B-309, Statement House,Barakhamba Road, New Delhi - 110001, India" },
                { icon: Phone, text: "+91 99776 30730" },
                { icon: Mail, text: "jainfinancialconsultancy@gmail.com" },
                { icon: Clock, text: "Mon – Sun, 9:00 AM – 7:00 PM" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Icon size={18} color="var(--gold-primary)" strokeWidth={1.5} />
                    <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <a href="#contact" className="btn-gold" style={{ fontSize: 13 }}>
                Get Free Consultation →
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
                style={{ fontSize: 13 }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass-card" style={{ padding: "32px 28px" }}>
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(138,143,168,0.1)",
          padding: "20px 24px",
          textAlign: "center",
          fontSize: 13,
          color: "var(--text-secondary)",
        }}
      >
        © {new Date().getFullYear()} Jain Financial Consultancy. All rights reserved. |{" "}
        <span style={{ color: "var(--gold-primary)" }}>Built with Excellence</span>
      </div>
    </footer>
  );
}
