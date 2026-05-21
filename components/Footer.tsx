import { LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gpaa-cream-dark bg-gpaa-slate px-4 pt-10 pb-28 text-gpaa-cream lg:pb-10">
      <div className="mx-auto max-w-4xl text-center text-sm">
        <p>
          © {new Date().getFullYear()} Gold Prospectors Association of America.
          All rights reserved.
        </p>
        <p className="mt-3">
          <a
            href={LINKS.privacy}
            className="inline-block py-1 underline decoration-gpaa-gold/60 underline-offset-2 hover:text-gpaa-gold-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
