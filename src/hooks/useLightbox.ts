"use client";

import { useState } from "react";

export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => setIndex(i);

  const close = () => setIndex(null);

  return {
    index,
    open,
    close,
    setIndex,
  };
}