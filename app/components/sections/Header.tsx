"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Lang } from "../lib/i18n";
import { copy } from "../lib/i18n";

export default function Header() {
  const sp = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const lang = (sp.get("lang") === "zh" ? "zh" : "en") as Lang;
  const t = copy[lang];

  function setLang(next: Lang) {
    const params = new URLSearchParams(sp.toString());
    params.set("lang", next);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-wide text-lg">
          HKTVRO
        </a>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#solutions" className="hover:underline">{t.nav.solutions}</a>
          <a href="#industries" className="hover:underline">{t.nav.industries}</a>
          <a href="#whyus" className="hover:underline">{t.nav.whyus}</a>
          <a href="#process" className="hover:underline">{t.nav.process}</a>
          <a href="#projects" className="hover:underline">{t.nav.projects}</a>
          <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          <a href="#hiring" className="hover:underline">{t.nav.hiring}</a>


<div className="ml-4 flex items-center border border-gray-300 rounded-full px-3 py-0.5 text-xs">

  <button
    onClick={() => setLang("en")}
    className={`px-3 ${
      lang === "en"
        ? "text-black font-semibold"
        : "text-gray-400 hover:text-black"
    }`}
  >
    EN
  </button>

  <span className="text-gray-300"> | </span>

  <button
    onClick={() => setLang("zh")}
    className={`px-3 ${
      lang === "zh"
        ? "text-black font-semibold"
        : "text-gray-400 hover:text-black"
    }`}
  >
    CN
  </button>

</div>


        </nav>
      </div>
    </header>
  );
}