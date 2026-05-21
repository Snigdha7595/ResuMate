// import OpenAI from "openai";

// const ai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
//   baseURL: process.env.OPENAI_BASE_URL,
// });

// export default ai;
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("API KEY:", process.env.OPENAI_API_KEY ? "loaded" : "MISSING");
console.log("GoogleGenerativeAI:", typeof GoogleGenerativeAI);

const ai = new GoogleGenerativeAI(process.env.OPENAI_API_KEY);

console.log("ai instance:", typeof ai);

export default ai;
