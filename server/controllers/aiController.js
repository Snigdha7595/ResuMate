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
            "You are an expert in resume writing. Enhance the professional summary into 1-2 compelling, ATS-friendly sentences highlighting key skills, experience, and career objectives. Return only the enhanced text, nothing else.",
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
            "You are an expert in resume writing. Enhance the job description into 1-2 sentences highlighting key responsibilities and achievements. Use action verbs and quantifiable results. Make it ATS-friendly. Return only the enhanced text, nothing else.",
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

export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText || !title) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an expert AI assistant that extracts structured data from resumes. Your entire response must be a single raw JSON object — no markdown, no code fences, no explanation, no extra text.",
        },
        {
          role: "user",
          content: `Extract data from the resume below and return ONLY a raw JSON object.

Use exactly this structure:
{
  "professional_summary": "",
  "skills": ["skill1", "skill2"],
  "personal_info": {
    "image": "",
    "full_name": "",
    "profession": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": ""
  },
  "experience": [
    { "company": "", "position": "", "start_date": "", "end_date": "", "description": "", "is_current": false }
  ],
  "projects": [
    { "name": "", "type": "", "description": "" }
  ],
  "education": [
    { "institution": "", "degree": "", "field": "", "graduation_date": "", "gpa": "" }
  ]
}

Resume:
${resumeText}`,
        },
      ],
    });

    let rawContent = response.choices[0].message.content;

    rawContent = rawContent
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "")
      .trim();

    let parsedData;
    try {
      parsedData = JSON.parse(rawContent);
    } catch (parseError) {
      return res.status(400).json({
        message: "Failed to parse AI response: " + rawContent.slice(0, 200),
      });
    }

    const newResume = await Resume.create({ userId, title, ...parsedData });
    res.json({ resumeId: newResume._id });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
