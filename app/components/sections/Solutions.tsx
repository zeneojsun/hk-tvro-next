import { Camera, Lock, Fingerprint, Radio } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SectionHeading from "../ui/SectionHeading";
import { copy, type Lang } from "@/app/lib/i18n";
import { getSolutionsSection } from "@/sanity/lib/client";

type Item = { key: string; title: string; body: string };

const ICONS: LucideIcon[] = [Camera, Lock, Fingerprint, Radio];

export default async function Solutions({ lang }: { lang: Lang }) {
  const cms = await getSolutionsSection();
  const t = copy.solutions;
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
      <div className="grid grid-cols-2 gap-8 md:gap-12">
        {items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Card key={item.key}>
              <CardHeader>
                <Icon className="w-5 h-5 text-slate-400 mb-1" strokeWidth={1.5} />
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{item.body}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </>
  );
}
