import { GoogleGenerativeAI } from '@google/generative-ai'

// Initialize only if the key is present
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null

export async function getServiceRecommendations(userPrompt, availableServices) {
  if (!genAI) {
    throw new Error('Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env.local file.')
  }

  const model = genAI.getGenerativeModel({ 
    model: "gemini-3.6-flash",
    generationConfig: {
      responseMimeType: "application/json",
    }
  })

  // Construct context of available services
  const servicesContext = availableServices.map(s => `- ID: ${s.id} | Name: ${s.name} | Category: ${s.category} | Outcome: ${s.outcome}`).join('\n')

  const systemPrompt = `
You are an expert CA advisor for Taxpex, a modern financial operations platform.
Your job is to read the user's situation and recommend the exact services they need from the provided list.

AVAILABLE SERVICES:
${servicesContext}

Respond ONLY with a valid JSON object in this exact format, with no markdown formatting or extra text:
{
  "explanation": "A short, helpful 1-2 sentence explanation of why they need these services.",
  "recommendedIds": ["id1", "id2"] 
}

User's Situation: "${userPrompt}"
`

  try {
    const result = await model.generateContent(systemPrompt)
    const responseText = result.response.text()
    
    return JSON.parse(responseText)
  } catch (error) {
    console.error("Gemini API Error Details:", error)
    throw new Error(error.message || "Failed to get recommendations. Please try again.")
  }
}
