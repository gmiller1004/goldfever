import { NextResponse } from "next/server";
import { z } from "zod";
import {
  ACCESS_COOKIE_MAX_AGE,
  ACCESS_COOKIE_NAME,
  getAccessCookiePath,
} from "@/lib/access-cookie";
import { subscribeToKlaviyoList } from "@/lib/klaviyo";

function successResponse(): NextResponse {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ACCESS_COOKIE_NAME, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: ACCESS_COOKIE_MAX_AGE,
    path: getAccessCookiePath(),
  });
  return response;
}

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  firstName: z.string().max(80).optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, {
      message: "You must agree to receive the guide and related emails.",
    }),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = subscribeSchema.safeParse(json);
  if (!parsed.success) {
    const message =
      parsed.error.flatten().fieldErrors.email?.[0] ??
      parsed.error.flatten().fieldErrors.consent?.[0] ??
      "Please check the form and try again.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { email, firstName, website } = parsed.data;

  if (website) {
    return NextResponse.json({ success: true });
  }

  const result = await subscribeToKlaviyoList({
    email: email.toLowerCase().trim(),
    firstName,
    source: "gold-fever-landing",
  });

  if (!result.ok) {
    const status = result.status && result.status >= 400 ? result.status : 502;
    return NextResponse.json(
      { error: result.error },
      { status: Math.min(status, 502) },
    );
  }

  return successResponse();
}
