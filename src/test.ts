import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
});

async function main() {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: "Reply with only: Hello Gemini!",
        });

        console.log(response.text);
    } catch (error) {
        console.error(error);
    }
}

main();
