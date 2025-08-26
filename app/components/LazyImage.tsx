"use client";

import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function LazyImage({
  src,
  alt,
  className = "",
  width = "100%",
  height = "100%",
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {!isLoaded && (
        <div className={`bg-gray-200 animate-pulse rounded-lg ${className} flex items-center justify-center min-h-[200px]`}>
          <div className="text-gray-400">Loading image...</div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${!isLoaded ? 'opacity-0 absolute inset-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
}
