import Image from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  aspect?: "4/3" | "video" | "book";
  priority?: boolean;
  className?: string;
  objectPosition?: string;
  fit?: "cover" | "contain";
};

export function ContentImage({
  src,
  alt,
  aspect = "4/3",
  priority = false,
  className = "",
  objectPosition = "center",
  fit = "cover",
}: ContentImageProps) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "book"
        ? "aspect-[3/4] min-h-[280px] sm:min-h-[340px]"
        : "aspect-[4/3]";

  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${aspectClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`${fitClass} ${aspect === "book" ? "bg-black" : ""}`}
        style={{ objectPosition }}
        sizes={
          aspect === "book"
            ? "(max-width: 1024px) 70vw, 360px"
            : "(max-width: 1024px) 100vw, 560px"
        }
      />
    </div>
  );
}
