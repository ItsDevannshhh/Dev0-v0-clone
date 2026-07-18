import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.AI_API_KEY!,
    baseURL: process.env.AI_API_BASE_URL!,
});

async function main() {
    const response = await client.chat.completions.create({
        model: "openai/gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: "Say Hello",
            },
        ],
    });

    console.log(response.choices[0].message.content);
}

main().catch(console.error);