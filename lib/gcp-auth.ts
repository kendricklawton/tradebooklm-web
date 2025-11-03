import { GoogleAuth } from "google-auth-library";

function getGcpCredentials() {
  const encodedKey = process.env.GCP_SERVICE_ACCOUNT_BASE64;
  if (!encodedKey) {
    throw new Error("GCP_SERVICE_ACCOUNT_BASE64 env var is not set.");
  }
  const decodedKey = Buffer.from(encodedKey, "base64").toString("utf-8");
  return JSON.parse(decodedKey);
}

export async function getAuthClient() {
  const targetAudience = process.env.TRADEBOOKLM_API_URL;
  if (!targetAudience) {
    throw new Error("TRADEBOOKLM_API_URL not set.");
  }

  const credentials = getGcpCredentials();
  const auth = new GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
  });

  return auth.getIdTokenClient(targetAudience);
}
