"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  duration = 2000,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Extract number (remove commas & +)
    const numericValue = parseInt(value.replace(/,/g, "").replace("+", ""));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;
        const startTime = performance.now();

        function animate(time: number) {
          const progress = Math.min(
            (time - startTime) / duration,
            1
          );

          const current = Math.floor(progress * numericValue);

          setDisplay(
            current.toLocaleString() + (value.includes("+") ? "+" : "")
          );

          if (progress < 1) requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
