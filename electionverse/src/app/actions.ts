"use server";

import { getGeminiModel } from "@/lib/gemini";

export async function getChatResponse(message: string, history: { role: "user" | "model", parts: { text: string }[] }[] = []) {
  try {
    const model = getGeminiModel();
    const chat = model.startChat({
      history,
      systemInstruction: "You are ElectionVerse, a friendly election education assistant for Indian voters. Explain things simply like you are talking to a first-time voter. Always use one real-life example in your answer. Keep answers under 100 words. If asked in Hindi or Assamese, respond in that language.",
    });

    const result = await chat.sendMessage(message);
    return result.response.text();
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm sorry, I'm having trouble connecting to the assistant right now. Please try again in a moment!";
  }
}
