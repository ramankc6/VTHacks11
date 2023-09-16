import { OpenAI } from "openai";

console.log(process.env.OPENAI_KEY)
const config = new OpenAI({
  // apiKey: process.env.OPENAI_KEY,
  dangerouslyAllowBrowser: true,
  organization: "org-TmJDI1qNxxPsvv0sGniSnxDc",
  apiKey: "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"
});

export default config;
