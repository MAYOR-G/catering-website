import { cn } from "../lib/utils";

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
};

export function ImageFrame({
  src,
  alt,
  className,
  imageClassName,
  loading = "lazy",
}: ImageFrameProps) {
  return (
    <div className={cn("overflow-hidden bg-linen", className)}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn("h-full w-full object-cover", imageClassName)}
      />
    </div>
  );
}
