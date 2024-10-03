"use client";

import { useEffect, useRef } from "react";

const OscillatingAnimation = ({ className, offset, speed }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);
  const numCircles = 10;
  const shapesPerCircle = 20;
  const baseSize = 16;
  const baseSpeedFactor = 0.75; // Base speed (25% slower than original)

  useEffect(() => {
    const createShape = () => {
      if (containerRef.current) {
        const shape = document.createElement("div");
        shape.className = "absolute border border-gray-300 bg-white";
        containerRef.current.appendChild(shape);
        return shape;
      }
      return null;
    };

    const initShapes = () => {
      for (let i = 0; i < numCircles * shapesPerCircle; i++) {
        const shape = createShape();
        if (shape) {
          shapesRef.current.push(shape);
        }
      }
    };

    function sine(x) {
      return Math.sin(x);
    }

    function triangle(x) {
      const period = 2 * Math.PI;
      const phase = x % period;
      return (
        1 -
        4 *
          Math.abs(Math.round(phase / period - 0.25) - (phase / period - 0.25))
      );
    }

    function interpolate(x, t) {
      return (1 - t) * sine(x) + t * triangle(x);
    }

    const animate = () => {
      const baseTime = Date.now() * 0.0025 * baseSpeedFactor + offset;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      shapesRef.current.forEach((shape, index) => {
        const circleIndex = Math.floor(index / shapesPerCircle);
        const shapeIndex = index % shapesPerCircle;

        // Adjust speed based on circle index (outer circles move slower) but squares still generate at the same angles along the circle
        const time = baseTime; // Outer circles move up to 50% slower

        //   Math.sin(time * 0.5) * Math.PI * 0.2 * (1 + circleIndex * 0.08); // Reduced range of motion
        const baseAngle = (shapeIndex / shapesPerCircle) * Math.PI * 2;
        const angle = baseAngle + time / 5;

        const radius = 30 + circleIndex * 15 * Math.sin(time / 2); // Fixed radius for each circle

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        shape.style.width = `${baseSize}px`;
        shape.style.height = `${baseSize}px`;
        shape.style.transform = `translate(${x - baseSize / 2}px, ${
          y - baseSize / 2
        }px)`;
      });

      requestAnimationFrame(animate);
    };

    initShapes();
    animate();

    return () => {
      shapesRef.current.forEach((shape) => shape.remove());
      shapesRef.current = [];
    };
  }, []);

  return (
    <div
      className={
        "absolute w-screen h-screen -translate-x-1/2 -translate-y-1/2" +
        " " +
        className
      }
      ref={containerRef}
    ></div>
  );
};

export default OscillatingAnimation;
