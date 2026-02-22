"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function HtmlLangSync() {
  const sp = useSearchParams();

  useEffect(() => {
    const lang = sp.get("lang") === "zh" ? "zh" : "en";
    document.documentElement.lang = lang;
  }, [sp]);

  return null;
}
