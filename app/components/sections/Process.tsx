import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SectionHeading from "../ui/SectionHeading";
import { copy, type Lang } from "@/app/lib/i18n";
import { getProcessSection } from "@/sanity/lib/client";

export default async function Process({ lang }: { lang: Lang }) {
  const cms = await getProcessSection();
  const t = copy.process;
  const zh = lang === "zh";

  const title = (zh ? cms?.title_zh || cms?.title_en : cms?.title_en || cms?.title_zh) || t.title[lang];

  const steps = cms?.steps?.length
    ? cms.steps.map((step: any) => ({
        key:   step.stepNumber ?? step.title_en ?? "",
        n:     step.stepNumber ?? "",
        title: (zh ? step.title_zh || step.title_en : step.title_en || step.title_zh) ?? "",
        body:  (zh ? step.body_zh  || step.body_en  : step.body_en  || step.body_zh)  ?? "",
      }))
    : t.steps.map((step) => ({
        key:   step.n,
        n:     step.n,
        title: step.title[lang],
        body:  step.body[lang],
      }));

  return (
    <>
      <SectionHeading title={title} />
      <div className="grid md:grid-cols-4 gap-8 md:gap-12">
        {steps.map((step) => (
          <Card key={step.key} className="transition-all duration-200 hover:shadow-md hover:-translate-y-1">
            <CardHeader>
              <p className="text-sm font-semibold tracking-widest text-muted-foreground">{step.n}</p>
              <CardTitle className="text-xl">{step.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{step.body}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
