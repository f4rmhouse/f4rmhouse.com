"use client";

import { useEffect, useRef, useState } from "react";

interface OptimizedMediaProps {
  src: string;
  alt: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

export function OptimizedMedia({
  src,
  alt,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
}: OptimizedMediaProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [useVideo, setUseVideo] = useState(false);
  const mediaRef = useRef<HTMLElement>(null);

  // Check if optimized video version exists
  useEffect(() => {
    if (src.endsWith('.gif')) {
      const videoSrc = src.replace('.gif', '.mp4').replace('/public/', '/optimized/');
      
      // Test if optimized video exists
      fetch(videoSrc, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            setUseVideo(true);
          }
        })
        .catch(() => {
          // Fallback to GIF if video doesn't exist
          setUseVideo(false);
        });
    }
  }, [src]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (mediaRef.current) {
      observer.observe(mediaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getOptimizedSrc = () => {
    if (useVideo && src.endsWith('.gif')) {
      return src.replace('.gif', '.mp4').replace('/', '/optimized/');
    }
    return src;
  };

  if (useVideo || src.endsWith('.mp4') || src.endsWith('.mov')) {
    return (
      <div className="relative">
        {!isLoaded && (
          <div className={`bg-gray-200 animate-pulse rounded-lg ${className}`}>
            <div className="flex items-center justify-center h-full min-h-[200px]">
              <div className="text-gray-400">Loading video...</div>
            </div>
          </div>
        )}
        
        <video
          ref={mediaRef as React.RefObject<HTMLVideoElement>}
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          autoPlay={autoPlay && isInView}
          muted={muted}
          loop={loop}
          controls={controls}
          preload="metadata"
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          style={{ display: isLoaded ? 'block' : 'none' }}
        >
          {isInView && <source src={getOptimizedSrc()} type="video/mp4" />}
          {isInView && src.endsWith('.mov') && <source src={src} type="video/quicktime" />}
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // Fallback to image for GIFs and other formats
  return (
    <div className="relative">
      {!isLoaded && (
        <div className={`bg-gray-200 animate-pulse rounded-lg ${className}`}>
          <div className="flex items-center justify-center h-full min-h-[200px]">
            <div className="text-gray-400">Loading image...</div>
          </div>
        </div>
      )}
      
      <img
        ref={mediaRef as React.RefObject<HTMLImageElement>}
        src={isInView ? src : undefined}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </div>
  );
}
