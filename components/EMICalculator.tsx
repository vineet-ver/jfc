"use client";

import { useState, useMemo } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EMICalculator() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(5);

  const { emi, totalInterest, totalPayment, principalPercent } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emiVal = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPay = emiVal * n;
    const totalInt = totalPay - amount;
    const pp = (amount / totalPay) * 100;
    return {
      emi: Math.round(emiVal),
      totalInterest: Math.round(totalInt),
      totalPayment: Math.round(totalPay),
      principalPercent: Math.round(pp),
    };
  }, [amount, rate, tenure]);

  const formatCurrency = (val: number) =>
    "₹" + val.toLocaleString("en-IN");

  return (
    <div
      style={{
        padding: 24,
        background: "rgba(5,8,16,0.5)",
        borderRadius: 14,
        border: "1px solid var(--glass-border)",
      }}
    >
      <h4
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: 16,
          fontWeight: 700,
          color: "var(--gold-primary)",
          marginBottom: 20,
          letterSpacing: "0.04em",
        }}
      >
        EMI Calculator
      </h4>

      {/* Loan Amount */}
      <div style={{ marginBottom: 18 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
            fontSize: 13,
            color: "var(--text-secondary)",
          }}
        >
          <span>Loan Amount</span>
          <span style={{ color: "var(--gold-light)", fontWeight: 600 }}>
            {formatCurrency(amount)}
          </span>
        </div>
        <input
          type="range"
          min={100000}
          max={10000000}
          step={50000}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, var(--gold-primary) ${((amount - 100000) / 9900000) * 100}%, rgba(138,143,168,0.2) ${((amount - 100000) / 9900000) * 100}%)`,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            color: "var(--text-secondary)",
            marginTop: 2,
          }}
        >
          <span>₹1L</span>
          <span>₹1Cr</span>
        </div>
      </div>

      {/* Interest Rate */}
      <div style={{ marginBottom: 18 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
            fontSize: 13,
            color: "var(--text-secondary)",
          }}
        >
          <span>Interest Rate</span>
          <span style={{ color: "var(--gold-light)", fontWeight: 600 }}>{rate}%</span>
        </div>
        <input
          type="range"
          min={8}
          max={24}
          step={0.5}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, var(--gold-primary) ${((rate - 8) / 16) * 100}%, rgba(138,143,168,0.2) ${((rate - 8) / 16) * 100}%)`,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            color: "var(--text-secondary)",
            marginTop: 2,
          }}
        >
          <span>8%</span>
          <span>24%</span>
        </div>
      </div>

      {/* Tenure */}
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
            fontSize: 13,
            color: "var(--text-secondary)",
          }}
        >
          <span>Tenure</span>
          <span style={{ color: "var(--gold-light)", fontWeight: 600 }}>
            {tenure} {tenure === 1 ? "Year" : "Years"}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={30}
          step={1}
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, var(--gold-primary) ${((tenure - 1) / 29) * 100}%, rgba(138,143,168,0.2) ${((tenure - 1) / 29) * 100}%)`,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            color: "var(--text-secondary)",
            marginTop: 2,
          }}
        >
          <span>1 Yr</span>
          <span>30 Yrs</span>
        </div>
      </div>

      {/* Donut + Results */}
      <div style={{ display: "flex", gap: 24, alignItems: "center", marginBottom: 20 }}>
        {/* Donut Chart */}
        <div style={{ position: "relative", flexShrink: 0, width: 100, height: 100 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: `conic-gradient(var(--gold-primary) 0deg ${principalPercent * 3.6}deg, var(--accent-blue) ${principalPercent * 3.6}deg 360deg)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 14,
              borderRadius: "50%",
              background: "rgba(5,8,16,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: 16,
                color: "var(--gold-primary)",
              }}
            >
              {principalPercent}%
            </span>
            <span style={{ fontSize: 8, color: "var(--text-secondary)" }}>Principal</span>
          </div>
        </div>

        {/* Results */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: "var(--text-secondary)", display: "block" }}>
              Monthly EMI
            </span>
            <span
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: 24,
                color: "var(--gold-light)",
              }}
            >
              {formatCurrency(emi)}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 12,
              color: "var(--text-secondary)",
            }}
          >
            <div>
              <span style={{ display: "block" }}>Total Interest</span>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                {formatCurrency(totalInterest)}
              </span>
            </div>
            <div>
              <span style={{ display: "block" }}>Total Payment</span>
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                {formatCurrency(totalPayment)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href={getWhatsAppUrl("loan")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold"
        style={{ width: "100%", fontSize: 13, padding: "10px 20px" }}
      >
        Apply for This Loan on WhatsApp →
      </a>
    </div>
  );
}
