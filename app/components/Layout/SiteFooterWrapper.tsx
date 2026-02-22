import { getSiteSettings } from "@/sanity/lib/client";
import SiteFooter from "./SiteFooter";

export default async function SiteFooterWrapper() {
  const settings = await getSiteSettings();
  return <SiteFooter phone={settings?.phone} email={settings?.email} />;
}
