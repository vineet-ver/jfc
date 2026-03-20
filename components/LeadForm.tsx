"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const SERVICE_OPTIONS = [
  { value: "", label: "— Select Your Requirement —" },
  { value: "personal_loan", label: "💳  Personal Loan" },
  { value: "business_loan", label: "🏢  Business Loan" },
  { value: "mortgage_loan", label: "🏠  Mortgage / Home Loan" },
  { value: "investment", label: "📈  Investment Advisory" },
  { value: "real_estate", label: "🏗️  Real Estate Financing" },
  { value: "private_funding", label: "🚀  Private / Startup Funding" },
  { value: "retirement", label: "🏦  Retirement Planning" },
];

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "fbb106b2-12d3-49e3-9d39-94a81eb3be41");
    formData.append("subject", "New Lead — Jain Financial Consultancy");
    formData.append("from_name", "Jain Financial Website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) {
        formRef.current?.reset();
        setTimeout(() => {
          window.open(getWhatsAppUrl("form"), "_blank");
        }, 2000);
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="elite-form-wrapper">
      <div className="form-header">
        <span className="form-badge">FREE CONSULTATION</span>
        <h3>Start Your Financial Journey</h3>
        <p>Response within 2 business hours. Guaranteed.</p>
      </div>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="success-state"
        >
          <div className="success-icon">✦</div>
          <h4>Request Received</h4>
          <p>Our expert will contact you within 2 hours.</p>
          <p className="whatsapp-followup">Opening WhatsApp for instant help...</p>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={onSubmit}>
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <div className={`field-group ${focusedField === "name" ? "focused" : ""}`}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              required
            />
          </div>

          <div className={`field-group ${focusedField === "phone" ? "focused" : ""}`}>
            <label>Mobile Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              pattern="[0-9+\s\-]{10,15}"
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              required
            />
          </div>

          {!compact && (
            <>
              <div className={`field-group ${focusedField === "email" ? "focused" : ""}`}>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div className={`field-group ${focusedField === "service" ? "focused" : ""}`}>
                <label>Service Required</label>
                <select
                  name="service"
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  required
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className={`field-group full-width ${focusedField === "message" ? "focused" : ""}`}
              >
                <label>Your Requirement (Optional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Briefly describe your financial goal or loan requirement..."
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </>
          )}

          <button type="submit" className="submit-btn" disabled={status === "sending"}>
            {status === "sending" ? (
              <>
                <span className="spinner" /> Processing...
              </>
            ) : (
              "Get Free Consultation →"
            )}
          </button>

          {status === "error" && (
            <p className="error-msg">Something went wrong. Please try WhatsApp instead.</p>
          )}

          <p className="form-trust">🔒 Your data is 100% private. No spam. No third-party sharing.</p>
        </form>
      )}
    </div>
  );
}
