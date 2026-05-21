const KLAVIYO_SUBSCRIBE_URL =
  "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/";
const KLAVIYO_PROFILE_UPSERT_URL = "https://a.klaviyo.com/api/profile-import/";
const API_REVISION = "2024-10-15";

export type SubscribeInput = {
  email: string;
  firstName?: string;
  source?: string;
};

export type SubscribeResult =
  | { ok: true }
  | { ok: false; error: string; status?: number };

function klaviyoHeaders(apiKey: string): HeadersInit {
  return {
    Authorization: `Klaviyo-API-Key ${apiKey}`,
    "Content-Type": "application/json",
    Accept: "application/json",
    revision: API_REVISION,
  };
}

async function parseKlaviyoError(response: Response): Promise<string> {
  let message = "Unable to subscribe. Please try again.";
  try {
    const data = (await response.json()) as {
      errors?: Array<{ detail?: string }>;
    };
    const detail = data.errors?.[0]?.detail;
    if (detail) message = detail;
  } catch {
    // use default message
  }
  return message;
}

/** Subscribe Profiles accepts only email + subscriptions on the profile object. */
async function subscribeEmail(
  apiKey: string,
  listId: string,
  email: string,
  source: string,
): Promise<SubscribeResult> {
  const body = {
    data: {
      type: "profile-subscription-bulk-create-job",
      attributes: {
        profiles: {
          data: [
            {
              type: "profile",
              attributes: {
                email,
                subscriptions: {
                  email: {
                    marketing: {
                      consent: "SUBSCRIBED",
                    },
                  },
                },
              },
            },
          ],
        },
        custom_source: source,
      },
      relationships: {
        list: {
          data: {
            type: "list",
            id: listId,
          },
        },
      },
    },
  };

  const response = await fetch(KLAVIYO_SUBSCRIBE_URL, {
    method: "POST",
    headers: klaviyoHeaders(apiKey),
    body: JSON.stringify(body),
  });

  if (response.ok || response.status === 202) {
    return { ok: true };
  }

  return {
    ok: false,
    error: await parseKlaviyoError(response),
    status: response.status,
  };
}

/** Create or update profile — first_name and custom properties go here, not on subscribe. */
async function upsertProfileDetails(
  apiKey: string,
  input: SubscribeInput,
): Promise<void> {
  const attributes: Record<string, unknown> = {
    email: input.email,
    properties: {
      source: input.source ?? "gold-fever-landing",
      lead_magnet: "gold-fever-no-hassle-guide",
    },
  };

  if (input.firstName?.trim()) {
    attributes.first_name = input.firstName.trim();
  }

  const body = {
    data: {
      type: "profile",
      attributes,
    },
  };

  const response = await fetch(KLAVIYO_PROFILE_UPSERT_URL, {
    method: "POST",
    headers: klaviyoHeaders(apiKey),
    body: JSON.stringify(body),
  });

  if (!response.ok && response.status !== 200 && response.status !== 201) {
    console.error(
      "Klaviyo profile upsert failed:",
      response.status,
      await response.text(),
    );
  }
}

export async function subscribeToKlaviyoList(
  input: SubscribeInput,
): Promise<SubscribeResult> {
  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;

  if (!apiKey || !listId) {
    return { ok: false, error: "Klaviyo is not configured." };
  }

  const email = input.email.toLowerCase().trim();
  const source = input.source ?? "gold-fever-landing";

  const result = await subscribeEmail(apiKey, listId, email, source);

  if (!result.ok) {
    return result;
  }

  // Klaviyo: subscribe first, then update profile attributes (best-effort).
  await upsertProfileDetails(apiKey, { ...input, email });

  return { ok: true };
}
