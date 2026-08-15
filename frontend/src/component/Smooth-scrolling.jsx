import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    // Create Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,        // Smoothness duration
      smoothWheel: true,    // Smooth mouse wheel
      wheelMultiplier: 0.9, // Scroll speed
      touchMultiplier: 1.2, // Touch scroll speed
      infinite: true,       // Enable infinite scrolling
      lerp: 0.08,           // Smooth interpolation
    });

    // Animation loop
    const raf = (time) => {
      lenis.raf(time);

      // Keep the animation running
      requestAnimationFrame(raf);
    };

    // Start animation loop
    requestAnimationFrame(raf);

    // Cleanup when component is removed
    return () => {
      lenis.destroy();
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default SmoothScroll;