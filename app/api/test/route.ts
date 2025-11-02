import { NextRequest, NextResponse } from "next/server";

// export async function DELETE(
//   request: NextRequest,
//   context: { params: Promise<{ tradebookId: string }> },
// ) {
//   try {
//     const API_URL = process.env.API_URL;
//     if (!API_URL) {
//       throw new Error("API_URL is not defined");
//     }

//     const { tradebookId } = await context.params;
//     if (!tradebookId) {
//       throw new Error("Tradebook ID is required");
//     }

//     const headers = request.headers;
//     const response = await fetch(`${API_URL}/tradebook/${tradebookId}`, {
//       method: "DELETE",
//       headers: headers,
//     });

//     if (!response.ok) {
//       const errorData = await response
//         .json()
//         .catch(() => ({ error: response.statusText }));
//       console.error(errorData.error || response.statusText);
//       return NextResponse.json(
//         { error: errorData.error || response.statusText },
//         { status: response.status },
//       );
//     }

//     return NextResponse.json({ status: response.status });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: (error as Error).message },
//       { status: 500 },
//     );
//   }
// }

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const TRADEBOOKLM_API_URL = process.env.TRADEBOOKLM_API_URL;
    if (!TRADEBOOKLM_API_URL) {
      throw new Error("TRADEBOOKLM_API_URL is not defined");
    }

    const headers = request.headers;
    const response = await fetch(`${TRADEBOOKLM_API_URL}/test`, {
      method: "GET",
      headers: headers,
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

// export async function PATCH(
//   request: NextRequest,
//   context: { params: Promise<{ tradebookId: string }> },
// ) {
//   try {
//     const API_URL = process.env.API_URL;
//     if (!API_URL) {
//       throw new Error("API_URL is not defined");
//     }

//     const { tradebookId } = await context.params;
//     if (!tradebookId) {
//       throw new Error("Tradebook ID is required");
//     }
//     const headers = request.headers;
//     const body = await request.json();
//     const response = await fetch(`${API_URL}/tradebook/${tradebookId}`, {
//       method: "PATCH",
//       headers: headers,
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       const errorData = await response
//         .json()
//         .catch(() => ({ error: response.statusText }));

//       console.error(errorData.error || response.statusText);
//       return NextResponse.json(
//         { error: errorData.error || response.statusText },
//         { status: response.status },
//       );
//     }

//     return NextResponse.json({ status: response.status });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { error: (error as Error).message },
//       { status: 500 },
//     );
//   }
// }
