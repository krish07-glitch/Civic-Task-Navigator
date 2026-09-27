"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  radius: number;
  alpha: number;
  color: string;
}

interface InteractiveParticleBackgroundProps {
  className?: string;
  particleCount?: number;
}

export function InteractiveParticleBackground({
  className = "",
  particleCount = 65,
}: InteractiveParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Mouse coordinates and state
    const mouse = {
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      speed: 0,
      radius: 160,
      isInside: false,
    };

    const particles: Particle[] = [];

    // Distinctive Indian Civic Tech color palette for particles
    const colors = [
      "37, 99, 235",  // Civic Blue
      "59, 130, 246", // Sky/Parivahan Blue
      "79, 70, 229",  // Deep Indigo (UIDAI portal accent)
      "16, 185, 129", // Subtle Emerald (Digital India green)
    ];

    // Responsive setup
    const handleResize = () => {
      if (!canvas || !container) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);

      // Adjust particle count for smaller screens
      const targetCount = width < 768 ? Math.floor(particleCount * 0.55) : particleCount;

      if (particles.length === 0) {
        for (let i = 0; i < targetCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.35 + Math.random() * 0.55;
          const baseVx = Math.cos(angle) * speed;
          const baseVy = Math.sin(angle) * speed;
          const color = colors[Math.floor(Math.random() * colors.length)];

          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: baseVx,
            vy: baseVy,
            baseVx,
            baseVy,
            radius: 1.8 + Math.random() * 1.6, // Clearly visible 1.8px - 3.4px
            alpha: 0.4 + Math.random() * 0.35,  // Crisp contrast 0.40 - 0.75
            color,
          });
        }
      } else {
        // Adjust existing particles to new dimensions
        while (particles.length > targetCount) particles.pop();
        while (particles.length < targetCount) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.35 + Math.random() * 0.55;
          const color = colors[Math.floor(Math.random() * colors.length)];
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            baseVx: Math.cos(angle) * speed,
            baseVy: Math.sin(angle) * speed,
            radius: 1.8 + Math.random() * 1.6,
            alpha: 0.4 + Math.random() * 0.35,
            color,
          });
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Track mouse & pointer movement relative to the hero canvas
    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (
        clientX >= rect.left - 40 &&
        clientX <= rect.right + 40 &&
        clientY >= rect.top - 40 &&
        clientY <= rect.bottom + 40
      ) {
        const curX = clientX - rect.left;
        const curY = clientY - rect.top;

        if (mouse.prevX !== -9999) {
          const dx = curX - mouse.prevX;
          const dy = curY - mouse.prevY;
          mouse.speed = Math.sqrt(dx * dx + dy * dy);
        }

        mouse.prevX = curX;
        mouse.prevY = curY;
        mouse.x = curX;
        mouse.y = curY;
        mouse.isInside = true;
      } else {
        mouse.isInside = false;
        mouse.x = -9999;
        mouse.y = -9999;
      }
    };

    const handlePointerLeave = () => {
      mouse.isInside = false;
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.prevX = -9999;
      mouse.prevY = -9999;
      mouse.speed = 0;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    // IntersectionObserver to pause rendering when canvas is out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Static fallback for users with prefers-reduced-motion
    if (reducedMotion) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha * 0.6})`;
        ctx.fill();
      });
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("mousemove", handlePointerMove);
        document.removeEventListener("mouseleave", handlePointerLeave);
        observer.disconnect();
      };
    }

    // Dynamic Connection distances
    const maxConnectionDist = 125;
    const maxConnectionDistSq = maxConnectionDist * maxConnectionDist;
    const mouseConnectionDist = 145;
    const mouseConnectionDistSq = mouseConnectionDist * mouseConnectionDist;

    // Main 60-120fps Animation Loop
    const render = () => {
      if (isVisible && width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);

        // 1. Draw subtle cursor radial glow when mouse is over the hero
        if (mouse.isInside && mouse.x > 0 && mouse.y > 0) {
          const glowRadius = Math.min(180, 130 + mouse.speed * 1.5);
          const glowGradient = ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            glowRadius
          );
          glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.14)");
          glowGradient.addColorStop(0.4, "rgba(79, 70, 229, 0.06)");
          glowGradient.addColorStop(1, "rgba(59, 130, 246, 0)");

          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Decay mouse speed gradually
        mouse.speed *= 0.92;

        // 2. Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Mouse Interaction: Dynamic Repulsion & Disturbance Ripple
          if (mouse.isInside) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < mouse.radius * mouse.radius && distSq > 0.1) {
              const dist = Math.sqrt(distSq);
              // Repulsion force falls off with distance
              const force = (1 - dist / mouse.radius) * 1.6;
              const angle = Math.atan2(dy, dx);

              // Apply smooth push away from cursor
              p.vx += Math.cos(angle) * force * 0.45;
              p.vy += Math.sin(angle) * force * 0.45;
            }

            // Draw interactive thin connection lines from Cursor to nearby particles!
            if (distSq < mouseConnectionDistSq) {
              const dist = Math.sqrt(distSq);
              const lineAlpha = (1 - dist / mouseConnectionDist) * 0.42;
              ctx.beginPath();
              ctx.moveTo(mouse.x, mouse.y);
              ctx.lineTo(p.x, p.y);
              ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`;
              ctx.lineWidth = 1.0;
              ctx.stroke();
            }
          }

          // Damping: smoothly glide back toward organic baseline speed
          p.vx += (p.baseVx - p.vx) * 0.04;
          p.vy += (p.baseVy - p.vy) * 0.04;

          // Update position
          p.x += p.vx;
          p.y += p.vy;

          // Wrap around canvas edges seamlessly
          if (p.x < -15) p.x = width + 15;
          else if (p.x > width + 15) p.x = -15;

          if (p.y < -15) p.y = height + 15;
          else if (p.y > height + 15) p.y = -15;

          // Draw the Particle Dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
          ctx.fill();

          // Draw Connecting Lines between nearby neighbor particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxConnectionDistSq) {
              const dist = Math.sqrt(distSq);
              // Line opacity drops smoothly with distance
              const lineAlpha = (1 - dist / maxConnectionDist) * 0.22;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
              ctx.lineWidth = 0.85;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      observer.disconnect();
    };
  }, [particleCount, reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
