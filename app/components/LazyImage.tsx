"use client";

import { useState } from "react";
import Image from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export function LazyImage({
  src,
  alt,
  className = "",
  width = 800,
  height = 600,
  fill = false,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {!isLoaded && (
        <div className={`bg-gray-200 animate-pulse rounded-lg ${className} flex items-center justify-center min-h-[200px]`}>
          <div className="text-gray-400">Loading image...</div>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`${className} ${!isLoaded ? 'opacity-0 absolute inset-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        unoptimized={src.endsWith('.gif')}
      />
    </div>
  );
}
