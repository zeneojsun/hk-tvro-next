"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "../ui/SectionHeading";
import { copy, type Lang } from "@/app/lib/i18n";

interface ContactProps {
  lang: Lang;
  title?: string;
  subtitle?: string;
}

export default function Contact({ lang, title, subtitle }: ContactProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const t = copy.contact;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name:    String(fd.get("name")    || ""),
      email:   String(fd.get("email")   || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SectionHeading title={title ?? t.title[lang]} subtitle={subtitle ?? t.subtitle[lang]} />
      <form onSubmit={onSubmit} className="max-w-xl space-y-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-base font-medium">{t.name[lang]}</label>
          <Input id="name" name="name" required placeholder={t.namePlaceholder[lang]} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-base font-medium">{t.email[lang]}</label>
          <Input id="email" name="email" type="email" required placeholder={t.emailPlaceholder[lang]} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-base font-medium">{t.message[lang]}</label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder={t.messagePlaceholder[lang]}
            className="min-h-32 resize-none"
          />
        </div>

        <Button type="submit" disabled={loading} size="lg">
          {loading ? t.sending[lang] : t.send[lang]}
        </Button>

        {status === "ok"    && <p className="text-sm text-green-600">{t.ok[lang]}</p>}
        {status === "error" && <p className="text-sm text-destructive">{t.error[lang]}</p>}
      </form>
    </>
  );
}
