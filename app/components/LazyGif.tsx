"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface LazyGifProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
}

export function LazyGif({
  src,
  alt,
  className = "",
  width = "100%",
  height = "100%",
}: LazyGifProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div ref={ref} className={`relative ${className}`}>
      {!isIntersecting ? (
        <div className="bg-gray-200 animate-pulse rounded-lg flex items-center justify-center min-h-[200px]">
          <div className="text-gray-400">Loading...</div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading="lazy"
        />
      )}
    </div>
  );
}
