"use client";

interface FeatureSectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
  maxWidth?: string;
  videoSrc?: string;
}

export function FeatureSection({
  title,
  description,
  backgroundColor = "bg-radial from-neutral-300 to-neutral-400",
  videoSrc,
}: FeatureSectionProps) {
  return (
    <div className={`max-w-[1080px] mx-auto mt-[30vh]`}>
      <h1 className="mt-15 text-6xl w-[65%]">{title}</h1>
      <p className="mt-5 mb-5 w-[65%] text-neutral-300 text-xl">{description}</p>
      <div className={`rounded-lg mx-auto ${backgroundColor} relative overflow-hidden`}>
        <div className="p-6">
          {videoSrc ? (
            <video 
              controls
              muted
              loop
              width="" 
              height=""
              className="rounded-lg object-cover shadow-lg"
            >
              <source src={videoSrc} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className=""></div>
          )}
        </div>
      </div>
    </div>
  );
}
