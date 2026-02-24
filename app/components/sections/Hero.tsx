import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Camera, Lock, Fingerprint, Radio } from "lucide-react";
import { copy, type Lang } from "@/app/lib/i18n";
import { getSiteSettings } from "@/sanity/lib/client";
import Container from "@/app/components/Layout/Container";

export default async function Hero({ lang }: { lang: Lang }) {
  const settings = await getSiteSettings();
  const t = copy.hero;
  const zh = lang === "zh";

  const finalEyebrow =
    (zh ? settings?.heroEyebrow_zh || settings?.heroEyebrow_en : settings?.heroEyebrow_en || settings?.heroEyebrow_zh) ||
    t.eyebrow[lang];

  const finalSubtitle =
    (zh ? settings?.heroSubtitle_zh || settings?.heroSubtitle_en : settings?.heroSubtitle_en || settings?.heroSubtitle_zh) ||
    t.subtitle[lang];

  const rightCard = [
    { Icon: Camera,      label: zh ? "監控系統" : "Surveillance" },
    { Icon: Lock,        label: zh ? "門禁控制" : "Access Control" },
    { Icon: Fingerprint, label: zh ? "生物識別" : "Biometric" },
    { Icon: Radio,       label: zh ? "通訊系統" : "Communication" },
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-br from-sky-50 via-slate-50 to-blue-100/60 pt-20 md:pt-28 pb-28 md:pb-40">
      {/* Faint engineering grid — extremely subtle structural backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(71 85 105) 1px, transparent 1px), linear-gradient(to bottom, rgb(71 85 105) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: content */}
          <div className="space-y-10">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
              {finalEyebrow}
            </p>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-700 leading-[1.1] tracking-[-0.01em]">
                {t.line1[lang]}
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-[1.1] tracking-[-0.02em]">
                {t.line2[lang]}
              </h1>
            </div>

            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              {finalSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href="#solutions">{t.cta1[lang]}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">{t.cta2[lang]}</a>
              </Button>
            </div>
          </div>

          {/* Right: abstract engineering card */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white/70 shadow-sm p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {rightCard.map(({ Icon, label }) => (
                  <div key={label} className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex flex-col gap-2">
                    <Icon className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-slate-700">{label}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 pt-4 flex items-center">
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold text-slate-800">20+</p>
                  <p className="text-xs text-slate-400 mt-0.5">{zh ? "年行業經驗" : "Years Experience"}</p>
                </div>
                <div className="w-px h-10 bg-slate-100" />
                <div className="text-center flex-1">
                  <p className="text-2xl font-bold text-slate-800">{zh ? "全港" : "HK"}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{zh ? "服務覆蓋" : "Territory-Wide"}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Trust strip */}
        <div className="pt-12">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
            {t.trustLabel[lang]}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400 font-medium">
            {t.trustItems.map((item, i) => (
              <span key={item.en} className="flex items-center gap-6">
                {item[lang]}
                {i < t.trustItems.length - 1 && (
                  <span aria-hidden="true" className="text-slate-300">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <Separator className="mt-8" />
      </Container>
    </section>
  );
}
