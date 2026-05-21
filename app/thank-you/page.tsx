import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AnalyticsLeadEvent } from "@/components/AnalyticsLeadEvent";
import { ThankYouContent } from "@/components/ThankYouContent";
import {
  ACCESS_COOKIE_NAME,
  hasGuideAccess,
} from "@/lib/access-cookie";

export default async function ThankYouPage() {
  const cookieStore = await cookies();
  const access = cookieStore.get(ACCESS_COOKIE_NAME)?.value;

  if (!hasGuideAccess(access)) {
    redirect("/?signup=required");
  }

  return (
    <>
      <AnalyticsLeadEvent />
      <Header />
      <ThankYouContent />
      <Footer />
    </>
  );
}
