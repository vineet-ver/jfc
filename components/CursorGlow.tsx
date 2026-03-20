"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    const mql = window.matchMedia("(pointer: fine)");
    setIsMobile(!mql.matches);

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    if (mql.matches) {
      window.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseleave", handleLeave);
      document.addEventListener("mouseenter", handleEnter);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 20,
          top: pos.y - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid var(--gold-primary)",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 0.6 : 0,
          transition: "left 0.12s ease-out, top 0.12s ease-out, opacity 0.2s",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 3,
          top: pos.y - 3,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--gold-primary)",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      />
      {/* Glow trail */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 60,
          top: pos.y - 60,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition: "left 0.2s ease-out, top 0.2s ease-out, opacity 0.3s",
        }}
      />
    </>
  );
}
