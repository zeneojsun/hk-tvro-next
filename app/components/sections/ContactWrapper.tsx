import { getContactSection } from "@/sanity/lib/client";
import { copy, type Lang } from "@/app/lib/i18n";
import Contact from "./Contact";

export default async function ContactWrapper({ lang }: { lang: Lang }) {
  const cms = await getContactSection();
  const t = copy.contact;
  const zh = lang === "zh";

  const title    = (zh ? cms?.title_zh    || cms?.title_en    : cms?.title_en    || cms?.title_zh)    || t.title[lang];
  const subtitle = (zh ? cms?.subtitle_zh || cms?.subtitle_en : cms?.subtitle_en || cms?.subtitle_zh) || t.subtitle[lang];

  return <Contact lang={lang} title={title} subtitle={subtitle} />;
}
