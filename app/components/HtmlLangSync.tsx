"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname.startsWith("/zh") ? "zh" : "en";
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
