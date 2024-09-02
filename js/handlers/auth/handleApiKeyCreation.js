import { createApiKey } from "../../api/auth/createApiKey.js";

const handleApiKeyCreation = async () => {
    
  try {

    const apiKey = await createApiKey();
    console.log('API Key created:', apiKey);
  } catch (error) {
    console.error('Error creating API Key:', error);
  }
};

handleApiKeyCreation();  