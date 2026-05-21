"use client";

import { useState } from "react";

const VIDEO_ID = "dZNEZwQDmsY";

type YouTubeEmbedProps = {
  title: string;
};

export function YouTubeEmbed({ title }: YouTubeEmbedProps) {
  const [played, setPlayed] = useState(false);
  const [posterSrc, setPosterSrc] = useState(
    `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
  );

  if (played) {
    return (
      <div className="aspect-video w-full">
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlayed(true)}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden bg-gpaa-slate"
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        onError={() =>
          setPosterSrc(`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`)
        }
      />
      <span
        className="absolute inset-0 bg-gpaa-slate/25 transition group-hover:bg-gpaa-slate/35"
        aria-hidden
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-gpaa-gold shadow-lg transition group-hover:scale-105 sm:size-20">
          <svg
            className="ml-1 size-7 text-gpaa-slate sm:size-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
