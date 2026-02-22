interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl mb-14">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
