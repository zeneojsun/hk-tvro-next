import { Building2, Home, Briefcase, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { copy, type Lang } from "@/app/lib/i18n";
import { getIndustriesSection } from "@/sanity/lib/client";

type Item = { key: string; title: string; body: string };

const ICONS: LucideIcon[] = [Building2, Home, Briefcase, Landmark];

export default async function Industries({ lang }: { lang: Lang }) {
  const cms = await getIndustriesSection();
  const t = copy.industries;
  const zh = lang === "zh";

  const title = (zh ? cms?.title_zh || cms?.title_en : cms?.title_en || cms?.title_zh) || t.title[lang];

  const items: Item[] = cms?.items?.length
    ? cms.items.map((item: Record<string, string>) => ({
        key:   item.title_en ?? item.title_zh ?? "",
        title: (zh ? item.title_zh || item.title_en : item.title_en || item.title_zh) ?? "",
        body:  (zh ? item.body_zh  || item.body_en  : item.body_en  || item.body_zh)  ?? "",
      }))
    : t.items.map((item) => ({
        key:   item.title.en,
        title: item.title[lang],
        body:  item.body[lang],
      }));

  return (
    <>
      <SectionHeading title={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        {items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div
              key={item.key}
              className="flex flex-col items-center text-center rounded-lg border border-slate-200 p-6 transition-colors duration-150 hover:bg-slate-50/60"
            >
              <Icon className="w-5 h-5 text-slate-600 mb-3" strokeWidth={1.5} />
              <p className="font-semibold text-slate-800 mb-1.5">{item.title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
