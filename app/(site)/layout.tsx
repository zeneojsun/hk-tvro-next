import { Suspense } from "react";
import SiteHeader from "@/app/components/Layout/SiteHeader";
import SiteFooterWrapper from "@/app/components/Layout/SiteFooterWrapper";
import HtmlLangSync from "@/app/components/HtmlLangSync";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        <HtmlLangSync />
      </Suspense>
      <Suspense fallback={null}>
        <SiteHeader />
      </Suspense>
      {children}
      <Suspense fallback={null}>
        <SiteFooterWrapper />
      </Suspense>
    </>
  );
}
