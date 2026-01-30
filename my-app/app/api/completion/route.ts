import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(){
    const { text } = await generateText({
        model: openai("gpt-3.5-turbo"), // this is paid credit, so we are not using this
        prompt: "Explain the llm in 2 lines",
    })
    return Response.json({text});
}