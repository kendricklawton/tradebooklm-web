// import { Trade } from "@/interfaces/trade";
// import { Tradebook } from "@/interfaces/tradebook";

// // Tradebook Services
// export const createTradebookService = async (): Promise<string> => {
//   try {
//     const response = await fetch(`/api/tradebook`, {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//         "x-internal-secret": process.env.X_INTERNAL_SECRET || "",
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response
//         .json()
//         .catch(() => ({ error: response.statusText }));
//       throw new Error(errorData.error || response.statusText);
//     }

//     const data = await response.json();
//     return data.tradebookId;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new Error(error.message);
//     } else {
//       throw new Error("An unexpected error occurred");
//     }
//   }
// };

// export const deleteTradebookService = async (
//   tradebookId: string,
// ): Promise<void> => {
//   try {
//     const response = await fetch(`/api/tradebook/${tradebookId}`, {
//       method: "DELETE",
//     });

//     if (!response.ok) {
//       const errorData = await response
//         .json()
//         .catch(() => ({ error: response.statusText }));
//       throw new Error(errorData.error || response.statusText);
//     }
//   } catch (error) {
//     throw (error as Error).message;
//   }
// };

// export const updateTradebookService = async (
//   tradebook: Tradebook,
// ): Promise<void> => {
//   try {
//     const response = await fetch(`/api/tradebook/${tradebook.id}`, {
//       method: "PATCH",
//       body: JSON.stringify(tradebook),
//       headers: {
//         "Content-Type": "application/json",
//         "x-internal-secret": process.env.X_INTERNAL_SECRET || "",
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response
//         .json()
//         .catch(() => ({ error: response.statusText }));
//       throw new Error(errorData.error || response.statusText);
//     }
//   } catch (error) {
//     throw (error as Error).message;
//   }
// };

// // Stripe Services
// export const createStripeSessionService = async (
//   plan: string,
//   redirectURL: string,
// ): Promise<string> => {
//   try {
//     console.log("Redirect URL:", redirectURL);
//     console.log("Plan:", plan);
//     const response = await fetch("/api/stripe/session", {
//       method: "POST",
//       body: JSON.stringify({ plan, redirectURL }),
//       headers: {
//         "Content-Type": "application/json",
//         "x-internal-secret": process.env.X_INTERNAL_SECRET || "",
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response
//         .json()
//         .catch(() => ({ error: response.statusText }));
//       throw new Error(errorData.error || response.statusText);
//     }

//     const data = await response.json();
//     return data.sessionId;
//   } catch (error) {
//     throw (error as Error).message;
//   }
// };

// // Trade Services
// export const createTradesService = async (
//   tradebookId: string,
//   trades: Trade[],
// ): Promise<void> => {
//   try {
//     const response = await fetch(`/api/trade/${tradebookId}`, {
//       method: "POST",
//       body: JSON.stringify(trades),
//     });

//     if (!response.ok) {
//       const errorData = await response
//         .json()
//         .catch(() => ({ error: response.statusText }));
//       throw new Error(errorData.error || response.statusText);
//     }
//   } catch (error) {
//     throw (error as Error).message;
//   }
// };

// export const updateTradeService = async (
//   tradebookId: string,
//   trade: Trade,
// ): Promise<void> => {
//   try {
//     if (!tradebookId || !trade.id) {
//       throw new Error("Tradebook ID and trade ID are required");
//     }

//     const response = await fetch(`/api/trade/${tradebookId}/${trade.id}`, {
//       method: "PATCH",
//       body: JSON.stringify(trade),
//     });

//     if (!response.ok) {
//       throw new Error(
//         "Failed to update trade, if the issue persists, please contact support",
//       );
//     }
//   } catch (error) {
//     throw (error as Error).message;
//   }
// };

// export const deleteTradesService = async (
//   tradebookId: string,
//   tradeIds: string[],
// ): Promise<void> => {
//   try {
//     const response = await fetch(`/api/trade/${tradebookId}`, {
//       method: "DELETE",
//       body: JSON.stringify(tradeIds),
//     });

//     if (!response.ok) {
//       throw new Error(
//         "Failed to delete trades, if the issue persists, please contact support",
//       );
//     }
//   } catch (error) {
//     throw (error as Error).message;
//   }
// };

// // AI Chat Services
// export const createAIChatStreamService = async (
//   model: string,
//   tradebookId: string,
//   prompt: string,
//   tradesIds: string[],
// ): Promise<Response> => {
//   try {
//     const apiUrl = model.includes("gemini") ? "/api/vertex-ai" : "/api/open-ai";

//     const response = await fetch(`${apiUrl}/${model}/${tradebookId}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         prompt: prompt,
//         tradesIds: tradesIds,
//       }),
//       credentials: "include",
//     });

//     if (!response.ok || !response.body) {
//       const errorData = await response
//         .json()
//         .catch(() => ({ error: response.statusText }));
//       throw new Error(errorData.error || response.statusText);
//     }

//     return response;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new Error(error.message);
//     } else {
//       throw new Error("An unexpected error occurred");
//     }
//   }
// };

// // Get Test Service
// export const getTestService = async (): Promise<string> => {
//   try {
//     const response = await fetch(`/api/test`, {
//       method: "GET",
//     });

//     if (!response.ok) {
//       throw new Error("Failed to get test service");
//     }

//     const data = await response.json();
//     return data.message;
//   } catch (error) {
//     throw (error as Error).message;
//   }
// };
