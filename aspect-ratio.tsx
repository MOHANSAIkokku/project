import { useEffect } from "react";

const SignatureGlow = () => {
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;
    const onMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty("--glow-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--glow-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return <div className="pointer-glow" aria-hidden />;
};

export default SignatureGlow;
