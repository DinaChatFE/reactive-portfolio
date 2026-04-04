"use client";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

interface RiveHoverIconProps {
  src: string;
  stateMachineName: string;
  hoverInputName: string;
  className?: string;
  fallback?: React.ReactNode;
}

export function RiveHoverIcon({
  src,
  stateMachineName,
  hoverInputName,
  className,
  fallback,
}: RiveHoverIconProps) {
  const { RiveComponent, setInputState, rive } = useRive({
    src,
    stateMachines: stateMachineName,
    autoplay: true,
    onError: () => console.warn(`Failed to load Rive file: ${src}`),
  });

  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    if (rive) {
      rive.on('loaderror', () => setHasError(true));
    }
  }, [rive]);

  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div 
      className={cn("relative transition-transform duration-300", className)}
      onMouseEnter={() => setInputState(stateMachineName, hoverInputName, true)}
      onMouseLeave={() => setInputState(stateMachineName, hoverInputName, false)}
    >
      <RiveComponent />
    </div>
  );
}