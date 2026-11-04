
"use client";

import { useMemo } from "react";
import { Snowflake } from "lucide-react";
import "./Snowfall.css";

type SnowflakeItem = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
};

export default function Snowfall() {
  
    const snowflakes = useMemo<SnowflakeItem[]>(() => {
        const random = (seed: number) => {
            const x = Math.sin(seed * 127.1 + 78.233) * 43758.5453;
            return x - Math.floor(x);
        };

        return Array.from({ length: 35 }, (_, i) => ({
            id: i,
            left: random(i * 7 + 1) * 100,
            size: 10 + random(i * 7 + 2) * 16,
            duration: 8 + random(i * 7 + 3) * 12,
            delay: -random(i * 7 + 4) * 20,
            opacity: 0.25 + random(i * 7 + 5) * 0.5,
            drift: -40 + random(i * 7 + 6) * 80,
        }));
    }, []);


  return (
    <div className="snowfall" aria-hidden="true">
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          className="snowflake"
          style={
            {
              left: `${flake.left}%`,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
              opacity: flake.opacity,
              "--drift": `${flake.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
