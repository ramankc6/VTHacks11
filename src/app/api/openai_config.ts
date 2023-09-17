import { OpenAI } from "openai";

console.log(process.env.OPENAI_KEY)
const config = new OpenAI({
  // apiKey: process.env.OPENAI_KEY,
  dangerouslyAllowBrowser: true,
  organization: "org-TmJDI1qNxxPsvv0sGniSnxDc",
  apiKey: process.env.OPENAI_KEY
});

export default config;
