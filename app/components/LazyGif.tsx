"use client";

import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface LazyGifProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function LazyGif({
  src,
  alt,
  className = "",
  width = 800,
  height = 600,
}: LazyGifProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div ref={ref} className={`relative ${className}`}>
      {!isIntersecting ? (
        <div className="bg-gray-200 animate-pulse rounded-lg flex items-center justify-center min-h-[200px]">
          <div className="text-gray-400">Loading...</div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover ${className}`}
          unoptimized={src.endsWith('.gif')}
          priority={false}
          sizes="100vw"
        />
      )}
    </div>
  );
}
