
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateAITagline(mood: string): Promise<{ tagline: string; motivation: string }> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short, punchy marketing tagline and a one-sentence motivational booster for an energy drink brand called 'G-Verve'. The brand has a striking 'Neon Green' and 'High Voltage' aesthetic. The user's current mood/activity is: ${mood}. The tone should be electric, high-performance, and futuristic.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: { type: Type.STRING, description: "A catchy 3-5 word tagline." },
            motivation: { type: Type.STRING, description: "A short motivational sentence." }
          },
          required: ["tagline", "motivation"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("AI Generation Error:", error);
    return {
      tagline: "Spark Your Inner Voltage",
      motivation: "Harness the radioactive power of G-Verve to crush your goals today."
    };
  }
}
