"use client";

import { useSearchParams } from "next/navigation";
import Container from "./Container";
import { copy, getLangFromSearchParams } from "@/app/lib/i18n";

interface SiteFooterProps {
  phone?: string;
  email?: string;
}

export default function SiteFooter({ phone, email }: SiteFooterProps) {
  const lang = getLangFromSearchParams(useSearchParams());
  const t = copy.footer;

  return (
    <footer className="border-t bg-gray-50">
      <Container>
        <div className="py-12 grid md:grid-cols-3 gap-10">

          <div>
            <p className="font-bold text-xl mb-3">HKTVRO</p>
            <p className="text-base text-gray-500 leading-relaxed">{t.tagline[lang]}</p>
          </div>

          <div>
            <p className="font-semibold text-base mb-4">{t.solutionsLabel[lang]}</p>
            <ul className="space-y-2 text-base text-gray-500">
              {t.solutionLinks.map((link) => (
                <li key={link.en}>
                  <a href="#solutions" className="hover:text-black transition-colors">
                    {link[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-base mb-4">{t.contactLabel[lang]}</p>
            <ul className="space-y-2 text-base text-gray-500">
              {phone && <li>{phone}</li>}
              {email && <li>{email}</li>}
              <li className="leading-relaxed">{t.address[lang]}</li>
            </ul>
          </div>

        </div>

        <div className="border-t py-6 text-sm text-gray-400">
          © {new Date().getFullYear()} HKTVRO. {t.copyright[lang]}
        </div>
      </Container>
    </footer>
  );
}
