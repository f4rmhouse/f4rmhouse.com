"use client";

import { LazyVideo } from "./LazyVideo";

interface FeatureSectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
  maxWidth?: string;
  videoSrc?: string;
  imageUrl?: string;
}

export function FeatureSection({
  title,
  description,
  videoSrc,
  imageUrl,
}: FeatureSectionProps) {
  return (
    <div className={`flex max-w-[1080px] m-15 rounded-md rounded-lg`}>
      <div className="m-auto w-[100%]">
        <img height={300} width={300} className="rounded-full m-auto" src={imageUrl || "https://f4-public.s3.eu-central-1.amazonaws.com/artifacts/20d19bca-5d01-46d8-9b68-66537c49d462.jpg"} />
        <h1 className="text-xl pt-5 w-[100%] text-center">{title}</h1>
        <p className="text-center">{description}</p>
      </div>
      <div className={`rounded-lg relative overflow-hidden`}>
        <div className="">
          {videoSrc ? (
            <></>
          ) : (
            <div className=""></div>
          )}
        </div>
      </div>
    </div>
  );
}
