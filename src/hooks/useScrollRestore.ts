"use client";

import { useEffect } from "react";

export function useScrollRestore(key: string) {
  useEffect(() => {
    const saved = sessionStorage.getItem(key);

    if (saved) {
      window.scrollTo({
        top: Number(saved),
        behavior: "instant",
      });
    }

    const saveScroll = () => {
      sessionStorage.setItem(key, String(window.scrollY));
    };

    window.addEventListener("scroll", saveScroll);

    return () => {
      window.removeEventListener("scroll", saveScroll);
    };
  }, [key]);
}