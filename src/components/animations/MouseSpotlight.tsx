"use client";

import React, { useEffect, useRef, useState } from "react";

interface MouseSpotlightProps {
  className?: string;
  glowColor?: string; // e.g. "59, 130, 246" (blue)
  size?: number;
}

export function MouseSpotlight({
  className = "",
  glowColor = "59, 130, 246",
  size = 420,
}: MouseSpotlightProps) {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Touch device check
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      // Check if cursor is roughly within or near the container
      const isNear =
        e.clientX >= rect.left - 50 &&
        e.clientX <= rect.right + 50 &&
        e.clientY >= rect.top - 50 &&
        e.clientY <= rect.bottom + 50;

      if (isNear) {
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(${glowColor}, 0.075), transparent 75%)`,
        }}
      />
    </div>
  );
}
