import React from "react";

export interface AnimatedStatNumberProps {
  target: number;
  durationMs?: number;
  formatter?: (value: number) => string;
}

declare const AnimatedStatNumber: React.FunctionComponent<AnimatedStatNumberProps>;

export default AnimatedStatNumber;
