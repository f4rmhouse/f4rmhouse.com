"use client";

interface LazyVideoProps {
  src: string;
  className?: string;
  controls?: boolean;
  muted?: boolean;
  width?: string;
  height?: string;
}

export function LazyVideo({
  src,
  className = "rounded-full",
  controls = true,
  muted = true,
  width = "",
  height = "",
}: LazyVideoProps) {

  return (
    <div className={`relative ${className}`}>
      <video
        controls={controls}
        muted={muted}
        width={width}
        height={height}
        className={className}
        preload="metadata"
      >
        <source src={src} type="video/quicktime" />
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
