import React, { useEffect, useState } from "react";
import { animate } from "motion";

animate("#box", { x: 100 });

const AnimatedStatNumber = ({
  target,
  durationMs = 9000,
  formatter = (value) => `${value}`,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    let animationFrameId = 0;
    let startTimestamp = null;

    const tick = (timestamp) => {
      if (startTimestamp === null) {
        startTimestamp = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setValue(Math.round(easedProgress * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(tick);
      }
    };

    animationFrameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [durationMs, target]);

  return <span className="ourServiceStatNumber">{formatter(value)}</span>;
};

export default AnimatedStatNumber;
