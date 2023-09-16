import { OpenAI } from "openai";

console.log(process.env.OPENAI_KEY)
const config = new OpenAI({
  // apiKey: process.env.OPENAI_KEY,
  dangerouslyAllowBrowser: true,
  // organization: "org-VgxeahnSIvMwIXNxvh4Oc6AK", 
  // apiKey: "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",
  organization: "org-TmJDI1qNxxPsvv0sGniSnxDc",
  apiKey: "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"
});

export default config;
