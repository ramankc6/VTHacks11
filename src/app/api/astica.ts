// src/api/astica.ts
import axios from "axios";

async function callAsticaAPI(inputUrl: string) {
  const requestData = {
    tkn: `${process.env.ASTICA_API_KEY}`,
    modelVersion: '2.1_full',
    input: inputUrl, // Use the provided input URL
    visionParams: "describe,tags"
  };

  try {
    const response = await axios.post("https://vision.astica.ai/describe", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (response.status !== 200) {
      throw new Error(`Astica API request failed with status ${response.status}`);
    }

    return response.data;
  } catch (error: any) {
    throw new Error(`Error calling Astica API: ${error.message}`);
  }
}

export default callAsticaAPI;
