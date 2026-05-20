//controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum

// import Resume from "../models/Resume.js";
// import ai from "../configs/ai.js";

// export const enhanceProfessionalSummary = async (req, res) => {
//   try {
//     const { userContent } = req.body;
//     if (!userContent) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }
//     const response = await ai.chat.completions.create({
//       model: process.env.OPENAI_MODEL,
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are an expert in resume writing.Your task is to enhance the professional summary of a resume.The summary should be 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly. and only return text no options or anything else.",
//         },
//         {
//           role: "user",
//           content: userContent,
//         },
//       ],
//     });
//     const enhancedContent = response.choices[0].message.content;
//     return res.status(200).json({ enhancedContent });
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

// //controller for enhancing a resume's jpb description
// //POST: /api/ai/enhance-job-desc
// export const enhanceJobDescription = async (req, res) => {
//   try {
//     const { userContent } = req.body;
//     if (!userContent) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }
//     const response = await ai.chat.completions.create({
//       model: process.env.OPENAI_MODEL,
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are an expert in resume writing.Your task is to enhance the job description of a resume.The job description should be only in 1-2 sentences also highlighting key responsibilities and achievements.Use action verbs and quantifiable results where possible. Make ATS-friendly. and only return text no options or anything else.",
//         },
//         {
//           role: "user",
//           content: userContent,
//         },
//       ],
//     });
//     const enhancedContent = response.choices[0].message.content;
//     return res.status(200).json({ enhancedContent });
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

// //controller for uploading a resume to the database
// //POST: /api/ai/upload-resume
// export const uploadResume = async (req, res) => {
//   try {
//     const { resumeText, title } = req.body;
//     const userId = req.userId;
//     if (!resumeText) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }
//     const systemPrompt =
//       "You are an expert AI agenr to extract data from resume.";
//     const userPrompt = `extract data from this resume: ${resumeText}
//     Provide data in the following JSON format with no additional text before or after:

//     {
//     professional_summary: { type: String, default: "" },

//     skills: [{ type: String }],

//     personal_info: {
//       image: { type: String, default: "" },
//       full_name: { type: String, default: "" },
//       profession: { type: String, default: "" },
//       email: { type: String, default: "" },
//       phone: { type: String, default: "" },
//       location: { type: String, default: "" },
//       linkedin: { type: String, default: "" },
//       website: { type: String, default: "" },
//     },

//     experience: [
//       {
//         company: { type: String },
//         position: { type: String },
//         start_date: { type: String },
//         end_date: { type: String },
//         description: { type: String },
//         is_current: { type: Boolean },
//       },
//     ],

//     projects: [
//       {
//         name: { type: String },
//         type: { type: String },
//         description: { type: String },
//       },
//     ],

//     education: [
//       {
//         institution: { type: String },
//         degree: { type: String },
//         field: { type: String },
//         graduation_date: { type: String },
//         gpa: { type: String },
//       },
//       ],
//     }
//     `;
//     const response = await ai.chat.completions.create({
//       model: process.env.OPENAI_MODEL,
//       messages: [
//         { role: "system", content: systemPrompt },
//         {
//           role: "user",
//           content: userPrompt,
//         },
//       ],
//       // response_format: { type: "json_object" },
//     });
//     const extractedData = response.choices[0].message.content;
//     const parsedData = JSON.parse(extractedData);
//     const newResume = await Resume.create({ userId, title, ...parsedData });
//     res.json({ resumeId: newResume._id });
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };

//controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum

//controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum

//controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum

import Resume from "../models/Resume.js";
import ai from "../configs/ai.js";

export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an expert in resume writing.Your task is to enhance the professional summary of a resume.The summary should be 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly. and only return text no options or anything else.",
        },
        { role: "user", content: userContent },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//controller for enhancing a resume's job description
//POST: /api/ai/enhance-job-desc
export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an expert in resume writing.Your task is to enhance the job description of a resume.The job description should be only in 1-2 sentences also highlighting key responsibilities and achievements.Use action verbs and quantifiable results where possible. Make ATS-friendly. and only return text no options or anything else.",
        },
        { role: "user", content: userContent },
      ],
    });
    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//controller for uploading a resume to the database
//POST: /api/ai/upload-resume
export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText || !title) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const systemPrompt =
      "You are an expert AI assistant that extracts structured data from resumes. Your entire response must be a single raw JSON object — no markdown, no code fences, no explanation, no extra text before or after.";

    const userPrompt = `Extract data from the resume below. Return ONLY a raw JSON object, nothing else.

{
  "professional_summary": "string",
  "skills": ["string"],
  "personal_info": {
    "image": "",
    "full_name": "string",
    "profession": "string",
    "email": "string",
    "phone": "string",
    "location": "string",
    "linkedin": "string",
    "website": "string"
  },
  "experience": [{ "company": "string", "position": "string", "start_date": "string", "end_date": "string", "description": "string", "is_current": false }],
  "projects": [{ "name": "string", "type": "string", "description": "string" }],
  "education": [{ "institution": "string", "degree": "string", "field": "string", "graduation_date": "string", "gpa": "string" }]
}

Resume:
${resumeText}`;

    let rawContent;
    try {
      const response = await ai.chat.completions.create({
        model: process.env.OPENAI_MODEL,
        messages: [
          { role: "user", content: systemPrompt + "\n\n" + userPrompt },
        ],
      });
      rawContent = response.choices[0].message.content;
    } catch (aiError) {
      // Return the exact AI API error so it's visible in the browser/toast
      return res.status(400).json({
        message:
          "AI API error: " + (aiError.message || JSON.stringify(aiError)),
      });
    }

    // Strip markdown fences if the model added them anyway
    const cleaned = rawContent
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "")
      .trim();

    let parsedData;
    try {
      parsedData = JSON.parse(cleaned);
    } catch (parseError) {
      // Return the raw AI output so we can see what it actually returned
      return res.status(400).json({
        message:
          "Failed to parse AI response as JSON. Raw output: " +
          cleaned.slice(0, 300),
      });
    }

    const newResume = await Resume.create({ userId, title, ...parsedData });
    res.json({ resumeId: newResume._id });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
