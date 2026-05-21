import type { Metadata } from "next";
import "./globals.css";
import { BOOK_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BOOK_TITLE} | Free Download`,
  description:
    "Find real gold this weekend without locked gates or guesswork. Tom Massie's free guide — PDF, EPUB, and a full Gold Fever episode.",
  openGraph: {
    title: BOOK_TITLE,
    description:
      "Claim your free guide from Gold Fever host Tom Massie and the GPAA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
