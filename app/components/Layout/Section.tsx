import Container from "./Container";

interface SectionProps {
  id?: string;
  className?: string;
  variant?: "default" | "alt";
  divider?: boolean;
  children: React.ReactNode;
}

export default function Section({
  id,
  className,
  variant = "default",
  divider = false,
  children,
}: SectionProps) {
  const bg = variant === "alt" ? "bg-neutral-50" : "bg-white";
  const border = divider ? "border-b border-neutral-200" : "";

  return (
    <section id={id} className={[bg, border, "py-28", className ?? ""].filter(Boolean).join(" ")}>
      <Container>
        <div className="space-y-14">{children}</div>
      </Container>
    </section>
  );
}
