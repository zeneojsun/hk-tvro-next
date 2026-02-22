import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { copy, type Lang } from "@/app/lib/i18n";
import { getSiteSettings } from "@/sanity/lib/client";

export default async function Hero({ lang }: { lang: Lang }) {
  const settings = await getSiteSettings();
  const t = copy.hero;

  const zh = lang === "zh";

  const finalTitle =
    (zh ? settings?.heroTitle_zh || settings?.heroTitle_en : settings?.heroTitle_en || settings?.heroTitle_zh) ||
    "Integrated Security & Technical Solutions";

  const finalEyebrow =
    (zh ? settings?.heroEyebrow_zh || settings?.heroEyebrow_en : settings?.heroEyebrow_en || settings?.heroEyebrow_zh) ||
    t.eyebrow[lang];

  const finalSubtitle =
    (zh ? settings?.heroSubtitle_zh || settings?.heroSubtitle_en : settings?.heroSubtitle_en || settings?.heroSubtitle_zh) ||
    t.subtitle[lang];

  return (
    <>
      <section className="-mx-6 lg:-mx-8 px-6 lg:px-8 py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-slate-100">
        <div className="space-y-6 max-w-3xl">
          <p className="text-sm md:text-base font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            {finalEyebrow}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-foreground leading-[1.05]">
            {finalTitle}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            {finalSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Button asChild size="lg">
              <a href="#solutions">{t.cta1[lang]}</a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a href="#contact">{t.cta2[lang]}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="pt-2">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
          {t.trustLabel[lang]}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground/50 font-medium">
          {t.trustItems.map((item, i) => (
            <span key={item.en} className="flex items-center gap-6">
              {item[lang]}
              {i < t.trustItems.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-muted-foreground/30"
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </section>

      <Separator />
    </>
  );
}