import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.warn("⚠️ GEMINI_API_KEY is not defined. AI features will be disabled or use mock data.");
}

export const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export const getGeminiModel = (modelName: string = "gemini-flash-latest") => {
  if (!genAI) {
    // Return a stub that mimics the generative model if no API key is present
    return {
      generateContent: async () => ({
        response: { text: () => JSON.stringify({
          name: "The Offline Voter",
          description: "You are exploring the platform in offline mode. Connect an API key to see real AI analysis!",
          tips: ["Set up GEMINI_API_KEY", "Restart the server", "Try again"]
        })}
      }),
      startChat: () => ({
        sendMessage: async () => ({
          response: { text: () => "I'm currently in offline mode. Please configure the GEMINI_API_KEY to start chatting!" }
        })
      })
    } as any;
  }
  return genAI.getGenerativeModel({ model: modelName });
};
