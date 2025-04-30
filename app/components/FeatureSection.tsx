"use client";

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundColor?: string;
  maxWidth?: string;
}

export function FeatureSection({
  title,
  subtitle,
  description,
  backgroundColor = "bg-radial from-neutral-300 to-neutral-400",
}: FeatureSectionProps) {
  return (
    <div className={`max-w-[1080px] mx-auto mt-[30vh]`}>
      <h1 className="mt-15 text-6xl font-bold w-[65%]">{title}</h1>
      <p className="mt-5 mb-5 w-[65%] text-neutral-300 text-xl">{description}</p>
      <div className={`rounded-lg h-[75vh] mx-auto ${backgroundColor} relative overflow-hidden`}>
        <div className="absolute"></div>
        <div className=""></div>
      </div>
    </div>
  );
}
