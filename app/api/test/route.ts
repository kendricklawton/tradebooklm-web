import { NextResponse } from "next/server";
import { getAuthClient } from "@/lib/gcp-auth";
import { GaxiosErrorStatus } from "@/interfaces/gaxios-error-status";

export async function GET(): Promise<NextResponse> {
  try {
    const authClient = await getAuthClient();
    const apiUrl = `${process.env.TRADEBOOKLM_API_URL}/test`;

    const response = await authClient.request({
      url: apiUrl,
      method: "GET",
    });

    const data = response.data;
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Test Route Error:", error);
    const statusCode = (error as GaxiosErrorStatus).response?.status || 500;
    return NextResponse.json(
      { error: (error as Error).message },
      { status: statusCode },
    );
  }
}
