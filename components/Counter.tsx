"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: string;
  duration?: number;
};

export default function Counter({ value, duration = 1400 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));
  const started = useRef(false);

  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const prefix = value.match(/^0+/)?.[0]?.length && value.startsWith("0") ? "0" : "";
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const node = ref.current;
    if (!node || Number.isNaN(numeric)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numeric);
            setDisplay(`${prefix}${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={ref}>{display}</span>;
}
