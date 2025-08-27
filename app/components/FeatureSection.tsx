"use client";

import { LazyVideo } from "./LazyVideo";
import { Lock } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
  maxWidth?: string;
  videoSrc?: string;
  icon?: React.ReactNode;
}

export function FeatureSection({
  title,
  description,
  videoSrc,
  icon,
}: FeatureSectionProps) {
  return (
    <div className={`flex max-w-[1080px] m-10 rounded-md rounded-lg p-5`}>
      <div className="m-auto w-[100%]">
        {icon}
        <h1 className="text-2xl w-[100%]">{title}</h1>
      </div>
      <div className={`rounded-lg relative overflow-hidden`}>
        <div className="pt-6 pb-2">
          {videoSrc ? (
            <LazyVideo
              src={videoSrc}
              className="rounded-lg object-cover shadow-lg"
              controls={true}
              muted={true}
            />
          ) : (
            <div className=""></div>
          )}
        </div>
      </div>
    </div>
  );
}
