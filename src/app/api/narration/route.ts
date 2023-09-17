import { NextResponse, NextRequest } from "next/server";

import { Storage } from "@google-cloud/storage";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";

const client = new TextToSpeechClient({
  credentials: {
    client_email: "jpsiegel8@gmail.com",
    private_key: process.env.GOOGLE_CLOUD_KEY,
  },
}); // Initialize the client

/**
 * TODO(developer):
 *  1. Uncomment and replace these variables before running the sample.
 *  2. Set up ADC as described in https://cloud.google.com/docs/authentication/external/set-up-adc
 *  3. Make sure you have the necessary permission to list storage buckets "storage.buckets.list"
 *    (https://cloud.google.com/storage/docs/access-control/iam-permissions#bucket_permissions)
 */
// const projectId = 'YOUR_PROJECT_ID';

async function authenticateImplicitWithAdc() {
  // This snippet demonstrates how to list buckets.
  // NOTE: Replace the client created below with the client required for your application.
  // Note that the credentials are not specified when constructing the client.
  // The client library finds your credentials using ADC.
  const storage = new Storage({
    projectId: "phitnest-357323",
  });
  const [buckets] = await storage.getBuckets();
  console.log("Buckets:");

  for (const bucket of buckets) {
    console.log(`- ${bucket.name}`);
  }

  console.log("Listed all storage buckets.");
}

authenticateImplicitWithAdc();

export async function POST(req: NextRequest) {
  const json = await req.json();
  const text = json.text;

  const request = {
    input: { text },
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await client.synthesizeSpeech(request as any);
  const audioBlob = new Blob([response.audioContent as BlobPart], {
    type: "audio/mp3",
  });
  const audioUrl = URL.createObjectURL(audioBlob);

  return NextResponse.json(
    {
      audioUrl,
    },
    {
      status: 200,
    }
  );
}
