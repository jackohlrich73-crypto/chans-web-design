type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto mb-10 max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
