"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LangSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.startsWith("/zh") ? "zh" : "en";

  function setLang(next: "en" | "zh") {
    const hash = window.location.hash;
    router.replace(`/${next}${hash}`);
  }

  return (
    <div className="flex items-center border border-gray-300 rounded-full px-1 py-0.5 text-xs">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-0.5 rounded-full transition-colors ${
          lang === "en" ? "font-semibold text-black" : "text-gray-400 hover:text-black"
        }`}
      >
        EN
      </button>
      <span className="text-gray-300 select-none">|</span>
      <button
        onClick={() => setLang("zh")}
        className={`px-2 py-0.5 rounded-full transition-colors ${
          lang === "zh" ? "font-semibold text-black" : "text-gray-400 hover:text-black"
        }`}
      >
        中文
      </button>
    </div>
  );
}
