"use client";

import { useState } from "react";

export default function ShareButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "ALFA-CKM Media",
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={share}
      className="absolute top-16 right-6 text-white text-sm border border-white/40 px-3 py-1 rounded hover:bg-white/10"
    >
      🔗 {copied ? "Skopiowano" : "Udostępnij"}
    </button>
  );
}
