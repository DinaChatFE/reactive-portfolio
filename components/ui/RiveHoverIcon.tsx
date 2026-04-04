"use client";

import { useRive, useStateMachineInput, EventType } from "@rive-app/react-canvas";
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
  const { RiveComponent, rive } = useRive({
    src,
    stateMachines: stateMachineName,
    autoplay: true,
    onLoadError: () => console.warn(`Failed to load Rive file: ${src}`),
  });

  const hoverInput = useStateMachineInput(rive, stateMachineName, hoverInputName);

  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    if (rive) {
      rive.on(EventType.LoadError, () => setHasError(true));
    }
  }, [rive]);

  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div 
      className={cn("relative transition-transform duration-300", className)}
      onMouseEnter={() => { if (hoverInput) hoverInput.value = true; }}
      onMouseLeave={() => { if (hoverInput) hoverInput.value = false; }}
    >
      <RiveComponent />
    </div>
  );
}