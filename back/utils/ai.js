import { InferenceClient } from '@huggingface/inference'

const hf = new InferenceClient(process.env.HF_ACCESS_TOKEN)

const SYSTEM_PROMPT = `
You are Tagqq AI, an assistant for the Tagg web application by XTown in Coimbatore. Tagg provides QR codes for vehicles; when scanned after an accident, it helps contact emergency numbers, relay calls, and send SMS/WhatsApp messages with live location to help people in accidents. Answer user questions about Tagg, its features, and how it works concisely and directly. Do not provide additional conversational elements, setup instructions, or examples unless explicitly asked. Format your response in markdown.
`

export async function getTaggAiResponse(userQuestion) {
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: userQuestion },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
        return "Sorry, I couldn't process your request right now."
    }
} 