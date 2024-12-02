"use client";
import React, { useState, useEffect, ReactNode } from "react";

interface AnimatedBackgroundProps {
  children: ReactNode;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  children,
  className = "",
}) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleCount = 40;
      const colors = ["#3B82F6", "#10B981", "#F43F5E", "#8B5CF6", "#EC4899"];

      const newParticles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 32,
        color: colors[Math.floor(Math.random() * colors.length)],
        offsetX: 0,
        offsetY: 0,
        amplitude: Math.random() * 20 + 10,
        speed: Math.random() * 0.0001,
      }));

      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animateParticles = () => {
      setParticles((currentParticles) =>
        currentParticles.map((particle) => ({
          ...particle,
          offsetX: Math.sin(Date.now() * particle.speed) * particle.amplitude,
          offsetY: Math.cos(Date.now() * particle.speed) * particle.amplitude,
        })),
      );

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animationFrameId = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <svg className="absolute w-full h-full">
          {particles.map((particle, index) => (
            <circle
              key={index}
              cx={`${particle.x + particle.offsetX}%`}
              cy={`${particle.y + particle.offsetY}%`}
              r={particle.size}
              fill={particle.color}
              opacity={0.5}
            />
          ))}
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
