"use client";

import { ReactNode, useState } from "react";

const ZoomContainer = ({ children }: { children: ReactNode }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  function handleZoom(deltaY: number) {
    const zoomStep = 0.01;
    const newZoomLevel =
      deltaY > 0 ? zoomLevel - zoomStep : zoomLevel + zoomStep;

    setZoomLevel(Math.max(0.1, newZoomLevel));
  }

  return (
    <div
      className="zoom-container"
      onWheel={(e) => {
        // e.preventDefault();
        handleZoom(e.deltaY);
      }}
      style={{ transform: `scale(${zoomLevel}) translate(5%, 5%)` }}
    >
      {children}
    </div>
  );
};

export default ZoomContainer;
