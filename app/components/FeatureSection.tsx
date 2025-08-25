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
  videoSrc,
}: FeatureSectionProps) {
  return (
    <div className={`max-w-[1080px] bg-white m-10 rounded-md text-black shadow rounded-lg p-5`}>
      <h1 className="text-2xl">{title}</h1>
      <p className="text-base">{description}</p>
      <div className={`rounded-lg relative overflow-hidden`}>
        <div className="pt-6 pb-2">
          {videoSrc ? (
            <video 
              controls
              muted
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
