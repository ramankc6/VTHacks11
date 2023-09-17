// src/api/astica.ts
import axios from "axios";
import { uploadImage } from "../s3";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const json = await req.json();
  const inputUrl = json.imageURI;

  const url = await uploadImage(inputUrl);

  const requestData = {
    tkn: '1B4B3DF9-FEDA-457E-A3AD-6707037C923F8EA80967-F514-49B5-8A5D-2FD9CB8D5C70',  // visit https://astica.ai
    modelVersion: '2.1_full', // 1.0_full, 2.0_full, or 2.1_full
    input: url,
    visionParams: 'describe, tags', // comma separated, defaults to all
    gpt_prompt: '', // only used if visionParams includes "gpt" or "gpt_detailed"
    prompt_length: 95 // number of words in GPT response
  };

  const response = await axios({
      method: 'post',
      url: 'https://vision.astica.ai/describe',
      data: requestData,
      headers: {
          'Content-Type': 'application/json',
      },
  });
  
  return NextResponse.json(
    {
      caption: response.data.caption.text 
    },
    {
      status: 200
    }
  )
}
