import { NextRequest, NextResponse } from "next/server";
import { workos } from "@/lib/workos";
import { getAuthClient } from "@/lib/gcp-auth"; // Adjust path if needed

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.WORKOS_WEBHOOK_SECRET;
  const apiUrl = process.env.TRADEBOOKLM_API_URL;

  // Validate critical server configuration
  if (!webhookSecret || !apiUrl) {
    console.error(
      "Missing critical environment variables for webhook handler.",
    );
    return NextResponse.json(
      { error: "Internal server configuration error" },
      { status: 500 },
    );
  }

  const payload = await request.json();
  const sigHeader = request.headers.get("workos-signature");

  if (!sigHeader) {
    return NextResponse.json(
      { error: "Missing signature header" },
      { status: 400 },
    );
  }

  try {
    const event = await workos.webhooks.constructEvent({
      payload: payload,
      sigHeader: sigHeader,
      secret: webhookSecret,
    });

    const eventType = event.event;
    if (
      eventType != "user.created" &&
      eventType != "user.updated" &&
      eventType != "user.deleted"
    ) {
      return NextResponse.json(
        { error: "Invalid event type" },
        { status: 400 },
      );
    }
    const userData = event.data;

    let webhookApiUrl: string;
    let webhookApiMethod: "POST" | "PATCH" | "DELETE";
    let webhookApiBody: unknown = undefined;

    switch (eventType) {
      case "user.created":
        webhookApiMethod = "POST";
        webhookApiUrl = `${apiUrl}/user`;
        webhookApiBody = userData;
        break;

      case "user.updated":
        webhookApiMethod = "PATCH";
        webhookApiUrl = `${apiUrl}/user/${userData.id}`;
        webhookApiBody = userData;
        break;

      case "user.deleted":
        webhookApiMethod = "DELETE";
        webhookApiUrl = `${apiUrl}/user/${userData.id}`;
        break;

      default:
        console.log(`Unhandled WorkOS event type: ${eventType}. Ignoring.`);
        return NextResponse.json({ received: true });
    }

    console.log(
      `Forwarding ${eventType} via ${webhookApiMethod} to ${webhookApiUrl}`,
    );

    const authClient = await getAuthClient();
    const response = await authClient.request({
      url: webhookApiUrl,
      method: webhookApiMethod,
      body: webhookApiBody ? JSON.stringify(webhookApiBody) : undefined,
    });

    if (!response.ok) {
      console.error(
        `Failed to forward ${eventType} to TradebookLM API. Status: ${response.status}`,
      );
      return NextResponse.json(
        {
          error: `Failed to forward ${eventType} to TradebookLM API`,
        },
        { status: response.status },
      );
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    // If the error is due to signature, it's a client error
    if (error instanceof Error && error.message.includes("signature")) {
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 400 },
      );
    }
    // Otherwise, it's a general processing error
    return NextResponse.json(
      { error: "Webhook processing error" },
      { status: 500 },
    );
  }
}
