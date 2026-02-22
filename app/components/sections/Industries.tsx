import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SectionHeading from "../ui/SectionHeading";
import { copy, type Lang } from "@/app/lib/i18n";
import { getIndustriesSection } from "@/sanity/lib/client";

type Item = { key: string; title: string; body: string };

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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {items.map((item) => (
          <Card key={item.key} className="transition-all duration-200 hover:shadow-md hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{item.body}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
