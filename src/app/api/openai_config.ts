import { OpenAI } from "openai";

const config = new OpenAI({
  organization: "org-TmJDI1qNxxPsvv0sGniSnxDc",
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export default config;
