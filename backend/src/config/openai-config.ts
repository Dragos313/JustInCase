import { Configuration } from "openai";

export const configureOpenAI = () => {
  const config = new Configuration({
    organization: process.env.OPENAI_ORAGANIZATION_ID,
    apiKey: process.env.OPEN_AI_SECRET
  });
  return config;
};
