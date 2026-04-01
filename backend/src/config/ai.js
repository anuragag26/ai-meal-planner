// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Initialize the Gemini SDK with your API Key
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export const generateMealPlanAI = async (prompt) => {
//   try {
//     console.log("🟡 GEMINI AI CALLED");
//     console.log("🟡 API KEY EXISTS:", !!process.env.GEMINI_API_KEY);

//     // Use the gemini-1.5-flash model (balanced for speed and cost)
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();

//     console.log("🟢 GEMINI SUCCESS");

//     return text;
//   } catch (error) {
//     console.error("🔴 GEMINI ERROR:");
//     console.error(error.message || error);
//     throw error;
//   }
// };


import axios from 'axios';

// Using the specific model URL from your reference
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

export const generateMealPlanAI = async (prompt) => {
  try {
    console.log("🟡 GEMINI REST API CALLED");

    const response = await axios.post(GEMINI_API_URL, {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ],
    });

    // Navigating the Gemini JSON structure to get the text
    const text = response.data.candidates[0].content.parts[0].text.trim();

    console.log("🟢 GEMINI SUCCESS");
    return text;

  } catch (error) {
    console.error("🔴 GEMINI ERROR:");
    // Log the specific API error message if available, otherwise the general message
    console.error(error.response?.data || error.message);
    throw error;
  }
};