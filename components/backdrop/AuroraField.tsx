"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

function useStars(count: number) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.6 + 0.4,
        delay: Math.random() * 6,
        duration: Math.random() * 3 + 2.5,
      }))
    );
  }, [count]);

  return stars;
}

export function AuroraField() {
  const stars = useStars(70);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      {/* base gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.16), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(0,229,255,0.10), transparent 60%), linear-gradient(180deg, #050816 0%, #0b1120 45%, #050816 100%)",
        }}
      />

      {/* aurora blobs */}
      <div
        className="absolute -left-1/4 top-[-10%] h-[60vw] w-[60vw] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.35) 0%, rgba(108,99,255,0) 70%)",
          animation: "aurora-drift 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[50vw] w-[50vw] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(0,229,255,0.22) 0%, rgba(0,229,255,0) 70%)",
          animation: "aurora-drift 28s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute left-[10%] top-[55%] h-[45vw] w-[45vw] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(236,72,153,0) 70%)",
          animation: "aurora-drift 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-[5%] bottom-[-10%] h-[40vw] w-[40vw] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, rgba(139,92,246,0) 70%)",
          animation: "aurora-drift 24s ease-in-out infinite reverse",
        }}
      />

      {/* stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: 0.5,
            animation: `float-y ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* grid + noise */}
      <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
