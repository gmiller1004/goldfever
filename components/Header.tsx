import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gpaa-cream-dark/80 bg-gpaa-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:py-3">
        <a
          href={LINKS.gpaaHome}
          className="flex shrink-0 items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={IMAGES.gpaaLogo}
            alt="Gold Prospectors Association of America"
            width={200}
            height={72}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </a>
        <a
          href="#claim-book"
          className="shrink-0 rounded-lg bg-gpaa-slate px-4 py-2 text-sm font-semibold text-white transition hover:bg-gpaa-river"
        >
          Free Guide
        </a>
      </div>
    </header>
  );
}
