"use server";

import { getGeminiModel } from "@/lib/gemini";

export async function analyzeVoterBias(responses: { promise: string, accepted: boolean }[]) {
  try {
    const model = getGeminiModel();
    
    const prompt = `
      You are an expert political psychologist. 
      Analyze the following voter responses to specific election promises. 
      Each response shows if the voter "accepted" (Sounds Good) or "rejected" (Seems Unlikely) the promise.

      User Responses:
      ${responses.map(r => `- Promise: "${r.promise}", Accepted: ${r.accepted}`).join("\n")}

      Based on these choices, generate a psychological profile for the voter.
      Return the response in the following JSON format:
      {
        "name": "Short Catchy Profile Name (e.g., The Pragmatic Skeptic)",
        "description": "A 2-3 sentence deep psychological insight into their voting behavior.",
        "tips": ["Tip 1", "Tip 2", "Tip 3"]
      }
      
      Only return the JSON. No other text.
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // Extract JSON from potential markdown blocks
    const jsonString = text.replace(/```json|```/g, "").trim();
    return JSON.parse(jsonString);
  } catch (error: any) {
    console.error("Gemini Analysis Error:", error);
    return {
      name: "The Mysterious Voter",
      description: "Our analysis engine encountered a slight glitch, but your choices suggest a complex and nuanced approach to political promises.",
      tips: ["Try taking the assessment again", "Evaluate each promise on its individual merits", "Stay curious and keep questioning"]
    };
  }
}
