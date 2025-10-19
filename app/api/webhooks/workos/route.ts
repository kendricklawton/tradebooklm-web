import { NextRequest, NextResponse } from "next/server";
import { workos } from "@/lib/workos";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  console.log("Raw Body: ", rawBody);
  const signature = req.headers.get("workos-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  try {
    const event = await workos.webhooks.constructEvent({
      payload: rawBody,
      sigHeader: signature,
      secret: process.env.WORKOS_WEBHOOK_SECRET!,
    });

    console.log("event:", event.event);

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }
}
