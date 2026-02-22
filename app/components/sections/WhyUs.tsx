import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SectionHeading from "../ui/SectionHeading";
import { copy, type Lang } from "@/app/lib/i18n";
import { getWhyusSection } from "@/sanity/lib/client";

export default async function WhyUs({ lang }: { lang: Lang }) {
  const cms = await getWhyusSection();
  const t = copy.whyus;
  const zh = lang === "zh";

  const title = (zh ? cms?.title_zh || cms?.title_en : cms?.title_en || cms?.title_zh) || t.title[lang];

  const items = cms?.items?.length
    ? cms.items.map((item: any) => ({
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
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
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
