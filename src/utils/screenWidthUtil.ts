import { useState, useEffect } from "react";

type TBreakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const countScreen = (screenWidth: number): TBreakpoint => {
  if (screenWidth < 640) return "xs";
  if (screenWidth >= 640 && screenWidth < 768) return "sm";
  if (screenWidth >= 768 && screenWidth < 1024) return "md";
  if (screenWidth >= 1024 && screenWidth < 1280) return "lg";
  if (screenWidth >= 1280 && screenWidth < 1536) return "xl";
  return "2xl";
};

export const useBreakpoint = () => {
  const [screenWidth, setScreenWidth] = useState(1536);
  const [breakpoint, setBreakpoint] = useState("2xl");
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    setBreakpoint(countScreen(screenWidth));
  }, [screenWidth]);

  return breakpoint;
};
