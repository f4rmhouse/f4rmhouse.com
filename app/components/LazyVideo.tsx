"use client";

import { useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export function LazyVideo({
  src,
  className = "",
  poster,
  autoPlay = false,
  muted = true,
  loop = true,
  controls = false,
}: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {!isLoaded && (
        <div className={`bg-gray-200 animate-pulse rounded-lg ${className} flex items-center justify-center min-h-[200px]`}>
          <div className="text-gray-400">Loading video...</div>
        </div>
      )}
      
      <video
        className={`${className} ${!isLoaded ? 'opacity-0 absolute inset-0' : 'opacity-100'} transition-opacity duration-300`}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src={src} type="video/mp4" />
        {src.endsWith('.mov') && <source src={src} type="video/quicktime" />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
