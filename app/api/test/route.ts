import { NextRequest, NextResponse } from "next/server";
import { getAuthToken } from "@/lib/google-auth";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const TRADEBOOKLM_API_URL = process.env.TRADEBOOKLM_API_URL;
    if (!TRADEBOOKLM_API_URL) {
      throw new Error("TRADEBOOKLM_API_URL is not defined");
    }

    const headers = request.headers;
    const authToken = await getAuthToken();

    const response = await fetch(`${TRADEBOOKLM_API_URL}/test`, {
      method: "GET",
      headers: {
        ...headers,
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ error: response.statusText }));
      console.error(errorData.error || response.statusText);
      return NextResponse.json(
        { error: errorData.error || response.statusText },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
