"use client";

import { LazyGif } from "./LazyGif";

interface FeatureSectionProps {
  description: string;
  backgroundColor?: string;
  maxWidth?: string;
  img?: string;
  costComparison?: string;
  savings?: string;
}

export function WorkflowExample({
  description,
  img,
  costComparison,
  savings
}: FeatureSectionProps) {
  return (
    <div className="bg-white rounded-md">
    {img?
        <LazyGif 
        src={img}
        alt={description}
        className="rounded-t-md object-cover shadow-lg"
        /> 
    : null}
    <p className="p-2 m-5 my-10 text-4xl text-black font-bold pt-10">{description}</p>
    <div className="rounded-md p-5 m-5 mb-10 bg-gradient-to-r from-purple-100 to-blue-200 text-black shadow">
      <p className="text-xs">Cost comparison:</p>
      <p className="text-xs">{costComparison}</p>
      <p className="font-bold mt-2">{savings}+/mo</p>
    </div>
  </div> 
  );
}