import type { Metadata } from "next";
import { Suspense } from "react";
import Section from "@/app/components/Layout/Section";
import FadeIn from "@/app/components/FadeIn";
import Hero from "@/app/components/sections/Hero";
import Solutions from "@/app/components/sections/Solutions";
import Industries from "@/app/components/sections/Industries";
import WhyUs from "@/app/components/sections/WhyUs";
import Process from "@/app/components/sections/Process";
import Projects from "@/app/components/sections/Projects";
import ContactWrapper from "@/app/components/sections/ContactWrapper";
import Hiring from "@/app/components/sections/Hiring";
import type { Lang } from "@/app/lib/i18n";
import { getSiteSettings } from "@/sanity/lib/client";

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp     = await searchParams;
  const lang: Lang = sp["lang"] === "zh" ? "zh" : "en";
  const settings   = await getSiteSettings();

  const company = settings?.companyName || "HKTVRO";
  const zh = lang === "zh";

  const title = zh
    ? `${company} – 综合安防与技术解决方案`
    : `${company} – Integrated Security & Technical Solutions`;

  const description = zh
    ? "为香港企业及屋苑提供可靠的监控、门禁及通讯基础设施系统集成服务。"
    : "Reliable system integration for surveillance, access control and communication infrastructure across Hong Kong.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: zh ? "zh_HK" : "en_HK",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: "/",
      languages: {
        en: "/?lang=en",
        zh: "/?lang=zh",
      },
    },
  };
}

export default async function Home({ searchParams }: PageProps) {
  const sp = await searchParams;
  const lang: Lang = sp["lang"] === "zh" ? "zh" : "en";

  return (
    <Suspense fallback={null}>
      <main className="min-h-screen bg-white text-black">
        <Section id="hero">
          <FadeIn threshold={0} delay={100}>
            <Hero lang={lang} />
          </FadeIn>
        </Section>

        <Section id="solutions" divider>
          <FadeIn>
            <Solutions lang={lang} />
          </FadeIn>
        </Section>

        <Section id="industries" variant="alt" divider>
          <FadeIn>
            <Industries lang={lang} />
          </FadeIn>
        </Section>

        <Section id="whyus" divider>
          <FadeIn>
            <WhyUs lang={lang} />
          </FadeIn>
        </Section>

        <Section id="process" variant="alt" divider>
          <FadeIn>
            <Process lang={lang} />
          </FadeIn>
        </Section>

        <Section id="projects" divider>
          <FadeIn>
            <Projects lang={lang} />
          </FadeIn>
        </Section>

        <Section id="contact" variant="alt" divider>
          <FadeIn>
            <ContactWrapper lang={lang} />
          </FadeIn>
        </Section>

        <Section id="hiring">
          <FadeIn>
            <Hiring lang={lang} />
          </FadeIn>
        </Section>
      </main>
    </Suspense>
  );
}
