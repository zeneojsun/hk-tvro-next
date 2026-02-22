import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "../ui/SectionHeading";
import { copy, type Lang } from "@/app/lib/i18n";
import { getProjectsSection } from "@/sanity/lib/client";

export default async function Projects({ lang }: { lang: Lang }) {
  const cms = await getProjectsSection();
  const t = copy.projects;
  const zh = lang === "zh";

  const title = (zh ? cms?.title_zh || cms?.title_en : cms?.title_en || cms?.title_zh) || t.title[lang];

  const items = cms?.items?.length
    ? cms.items.map((item: any) => ({
        key:     item.title_en ?? item.title_zh ?? "",
        title:   (zh ? item.title_zh   || item.title_en   : item.title_en   || item.title_zh)   ?? "",
        scope:   (zh ? item.scope_zh   || item.scope_en   : item.scope_en   || item.scope_zh)   ?? "",
        outcome: (zh ? item.outcome_zh || item.outcome_en : item.outcome_en || item.outcome_zh) ?? "",
      }))
    : t.items.map((item) => ({
        key:     item.title.en,
        title:   item.title[lang],
        scope:   item.scope[lang],
        outcome: item.outcome[lang],
      }));

  return (
    <>
      <SectionHeading title={title} />
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {items.map((item) => (
          <Card key={item.key} className="transition-all duration-200 hover:shadow-md hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{item.scope}</CardDescription>
            </CardHeader>
            <CardContent>
              <Separator className="mb-4" />
              <p className="text-base text-muted-foreground leading-relaxed">{item.outcome}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
