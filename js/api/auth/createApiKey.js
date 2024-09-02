import { apiKey } from "./createApiKey.js";

// Anta at accessToken er definert et sted i koden din
const accessToken = 'your-access-token-here'; // Sett riktig tilgangstoken her

export const createApiKey = async () => {
  const response = await fetch(apiKey, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}` // Inkluder tilgangstokenet ditt her
    },
    body: JSON.stringify({ name: 'My API Key name' }) // Valgfritt navn
  });

  if (!response.ok) {
    throw new Error('Failed to create API key');
  }

  const data = await response.json();
  return data.key; // Returner API-nøkkelen
};