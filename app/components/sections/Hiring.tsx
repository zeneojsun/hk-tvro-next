import SectionHeading from "../ui/SectionHeading";
import { copy, type Lang } from "@/app/lib/i18n";
import { getHiringSection } from "@/sanity/lib/client";

export default async function Hiring({ lang }: { lang: Lang }) {
  const cms = await getHiringSection();
  const t = copy.hiring;
  const zh = lang === "zh";

  const title = (zh ? cms?.title_zh || cms?.title_en : cms?.title_en || cms?.title_zh) || t.title[lang];
  const desc  = (zh ? cms?.desc_zh  || cms?.desc_en  : cms?.desc_en  || cms?.desc_zh)  || t.desc[lang];

  return (
    <>
      <SectionHeading title={title} />
      <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">{desc}</p>
    </>
  );
}
