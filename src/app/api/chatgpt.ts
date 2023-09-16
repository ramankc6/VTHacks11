import { ChatCompletionMessage } from "openai/resources/chat/completions.mjs";
import openai from "./openai_config";
import { OpenAI } from "openai";

const SYSTEM_PROMPT: string = `
You are a bot that helps people learn things blah blah blah.
`;

export const generatePrompt = (imageDescription: string) => {
  return `Write a 4 part story using the following description of a scene:\n\n${imageDescription}`;
};

export const getStory = async (imageDescription: string) => {
  const userPrompt = generatePrompt(imageDescription);

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

  console.log(response);

  return response as string;
};
