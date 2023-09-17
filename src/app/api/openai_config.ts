import { OpenAI } from "openai";

console.log(process.env.OPENAI_KEY)
const config = new OpenAI({
  // apiKey: process.env.OPENAI_KEY,
  dangerouslyAllowBrowser: true,
  organization: "org-TmJDI1qNxxPsvv0sGniSnxDc",
  apiKey: "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"
});

export default config;
