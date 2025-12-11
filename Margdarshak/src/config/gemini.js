import { GoogleGenerativeAI } from "@google/generative-ai";

// Hardcode your API key here
const ai = new GoogleGenerativeAI("AIzaSyCXmmgZZvy9Qw4nKeegY3sqMD-hJwvZhDw");

export async function runChat(prompt) {
  try {
    console.log("📝 User Question:", prompt);

    const model = ai.getGenerativeModel({ model: "gemini-3-pro-preview" });

    const result = await model.generateContent(prompt);

    console.log("🤖 AI Answer:", result.response.text());

    return result.response.text();
  } catch (error) {
    console.error("❌ Gemini API Error:", error);
    return "An error occurred while fetching the response.";
  }
}
