type TScreenWidth = {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

export const countScreen = (screenWidth: number): TScreenWidth => {
  if (screenWidth < 640) return { breakpoint: "xs" };
  if (screenWidth >= 640 && screenWidth < 768) return { breakpoint: "sm" };
  if (screenWidth >= 768 && screenWidth < 1024) return { breakpoint: "md" };
  if (screenWidth >= 1024 && screenWidth < 1280) return { breakpoint: "lg" };
  if (screenWidth >= 1280 && screenWidth < 1536) return { breakpoint: "xl" };
  return { breakpoint: "2xl" };
};
