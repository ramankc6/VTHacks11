import { NextResponse, NextRequest } from "next/server";

import { TextToSpeechClient } from "@google-cloud/text-to-speech";

const client = new TextToSpeechClient({
  credentials: {
    client_email: "lukedigiovanna@gmail.com",
    private_key: process.env.GOOGLE_CLOUD_KEY,
  },
}); // Initialize the client

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
