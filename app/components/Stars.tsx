"use client";
import { useEffect, useRef } from "react";

interface Props {
  count?: number;
  style?: React.CSSProperties;
}

export default function Stars({ count = 80, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    container.innerHTML = "";

    // --- Small background dot stars (static twinkle) ---
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 1.8 + 0.7;
      const duration = Math.random() * 4 + 2;
      const delay = Math.random() * 8;
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
        pointer-events: none;
      `;
      container.appendChild(star);
    }

    // --- Orbiting bright dots ---
    const orbitCount = Math.max(4, Math.round(count * 0.07));
    for (let i = 0; i < orbitCount; i++) {
      const cx = (i / orbitCount) * 88 + 6 + Math.random() * 6;
      const cy = 10 + Math.random() * 80;
      const orbitR = Math.random() * 55 + 35;
      const orbitDur = Math.random() * 20 + 18;
      const dotSize = Math.random() * 2.5 + 2;
      const delay = Math.random() * orbitDur;

      const pivot = document.createElement("div");
      pivot.style.cssText = `
        position: absolute;
        left: ${cx}%;
        top: ${cy}%;
        width: 0;
        height: 0;
        animation: spinStar ${orbitDur}s linear -${delay}s infinite;
        pointer-events: none;
      `;
      const dot = document.createElement("div");
      dot.style.cssText = `
        position: absolute;
        left: ${orbitR}px;
        top: -${dotSize / 2}px;
        width: ${dotSize}px;
        height: ${dotSize}px;
        border-radius: 50%;
        background: white;
        box-shadow: 0 0 ${dotSize * 3}px ${dotSize * 0.5}px rgba(255,255,255,0.85);
        pointer-events: none;
      `;
      pivot.appendChild(dot);
      container.appendChild(pivot);
    }
  }, [count]);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 1,
        transition: "transform 0.3s ease-out",
        ...style,
      }}
    />
  );
}
