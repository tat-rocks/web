"use client";
import { useEffect, useRef } from "react";

interface Props { count?: number; className?: string }

export default function Stars({ count = 80, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 4 + 2;
      const delay = Math.random() * 5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: white;
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: twinkle ${duration}s ease-in-out ${delay}s infinite;
        opacity: 0.4;
      `;
      container.appendChild(star);
    }
  }, [count]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
