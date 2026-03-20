"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 9999,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      {/* Pulse rings */}
      <motion.div
        animate={{ scale: [0.9, 1.5], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          border: "2px solid var(--gold-primary)",
        }}
      />
      <motion.div
        animate={{ scale: [0.9, 1.4], opacity: [0.4, 0] }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          border: "2px solid var(--gold-primary)",
        }}
      />
      {/* WhatsApp Icon */}
      <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785c-1.831 0-3.627-.492-5.192-1.42l-.372-.22-3.858.984 1.031-3.77-.243-.385A9.724 9.724 0 012.24 12.04c0-5.404 4.398-9.8 9.808-9.8a9.74 9.74 0 016.937 2.872 9.74 9.74 0 012.872 6.938c-.004 5.404-4.4 9.8-9.806 9.8v-.065zm8.344-18.138A11.728 11.728 0 0012.05 0C5.463 0 .104 5.353.1 11.94a11.88 11.88 0 001.591 5.945L0 24l6.335-1.652A11.89 11.89 0 0012.05 23.85c6.585 0 11.946-5.353 11.95-11.94a11.87 11.87 0 00-3.507-8.463l-.1.16z" />
      </svg>
    </a>
  );
}
