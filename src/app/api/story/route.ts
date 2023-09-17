import { ChatCompletionMessage } from "openai/resources/chat/completions.mjs";
import { NextResponse, NextRequest } from "next/server";
import openai from "../openai_config";

const SYSTEM_PROMPT: string = `
You are now StoryGPT. Your job is to take in an input of an AI that describes an image for you and create a script for a story teaching the user about a certain topic. It should be a short story devided in 4 parts and each part should have its own prompt that is going to be inserted into DALL-E in order to create a visualization of the story. Do not reply with anything except the script itself. Give the full script without prompting the users permission to continue. Return the result in the form of a json doc.


Here is a sample out put that teaches about entropy and AI image description is "A rocky coast with waves crashing on the rocks".

{
  "title": "The Tale of Entropy Bay",
  "parts": [
    {
      "part_number": 1,
      "prompt_for_dalle": "A young girl named Emily wearing a sun hat and holding a bucket, standing on a rocky coast with waves crashing on the rocks. She looks curious and excited.",
      "script": "Once upon a time, a young girl named Emily visited a special place known as Entropy Bay. With her sun hat and a bucket in hand, she was excited to explore. The coast was rocky, and the waves thundered as they crashed against the shore. 'What a fascinating place!' she thought. Her goal was to build the most organized sandcastle ever, not knowing that Entropy Bay had lessons to teach about the very opposite."
    },
    {
      "part_number": 2,
      "prompt_for_dalle": "Emily meticulously building a complex and organized sandcastle with turrets, walls, and a moat, right next to the crashing waves.",
      "script": "Emily found the perfect spot near the crashing waves and began her project. With meticulous care, she built turrets, walls, and even a tiny moat. Her sandcastle was a masterpiece of organization. She stood back, marveling at her creation, but also noticed something odd. The waves that crashed nearby seemed to rearrange the smaller rocks on the shore into a jumbled, random pattern. 'Why can't these rocks be as organized as my castle?' she wondered."
    },
    {
      "part_number": 3,
      "prompt_for_dalle": "A wave crashes onto the shore and partially destroys Emily's sandcastle, leaving it in a disorganized state. Emily looks shocked but thoughtful.",
      "script": "Just as Emily was pondering, a larger wave than usual crashed onto the shore. The water reached her carefully crafted sandcastle and washed part of it away. What was left was disorganized and chaotic. Emily felt shocked, but then thoughtful. 'Maybe there's something to learn from these waves and rocks,' she mused. It was the bay's way of teaching her about entropy: the natural tendency for systems to move towards disorder."
    },
    {
      "part_number": 4,
      "prompt_for_dalle": "Emily sits on a large rock on the rocky coast, holding a half-buried hourglass beside her. Waves crash in the background, and she looks enlightened.",
      "script": "Emily sat on a large rock, pondering the day's events. Next to her was a half-buried hourglass, symbolizing the inevitable passage of time and the unstoppable force of entropy. The waves kept crashing, and Emily felt enlightened. She realized that entropy isn't necessarily bad; it's a natural part of life. Whether it's sandcastles or the universe, everything eventually moves towards a state of disorder. And that's okay. 'Thanks, Entropy Bay,' she whispered, as another wave reshaped the coast."
    }
  ]
}
`;

export const generatePrompt = (topic: string, imageDescription: string) => {
  return `${SYSTEM_PROMPT}\n\nYour topic is ${topic} and you image description is ${imageDescription}. Write it in the same template as the given example."`;
};

export type FrameContent = {
    dalleCaption: string;
    narration: string;
}

const parseOutput = (story: string) => {
    // convert it to JSON
    const object = JSON.parse(story);
    return object;
}

export async function POST(req: NextRequest) {
    // topic: string, imageDescription: string
    const json = await req.json();
    const topic = json.topic;
    const caption = json.caption;

    const userPrompt = generatePrompt(topic, caption);

    const messages: ChatCompletionMessage[] = [
        {
        role: "system",
        content: SYSTEM_PROMPT,
        },
        {
        role: "user",
        content: userPrompt,
        },
    ];

    const chat = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
    });

    const response = chat.choices[0].message?.content;

    return NextResponse.json(
        {
            story: parseOutput(response as string)
        },
        {
            status: 200
        }
    )
};
