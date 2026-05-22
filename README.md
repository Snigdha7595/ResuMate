# ResuMate — AI-Powered Resume Builder

ResuMate is a full-stack web application that lets you create, edit, and share professional resumes. Upload an existing PDF and let AI extract your data automatically, or build one from scratch using the guided form builder with live preview.

---

## Features

- **AI Resume Upload** — Upload a PDF resume and have your details auto-extracted using the Groq AI API
- **Resume Builder** — Step-by-step form with sections for Personal Info, Summary, Experience, Education, Projects, and Skills
- **Live Preview** — See changes reflected in real time as you type
- **Multiple Templates** — Choose from Classic, Modern, Minimal, and Minimal Image layouts
- **Accent Color Picker** — Customize the color theme of your resume
- **Profile Photo** — Upload a profile picture with optional AI background removal via ImageKit
- **Public / Private Toggle** — Make your resume publicly shareable with a unique link
- **Download** — Print or save your resume as a PDF via the browser
- **Authentication** — JWT-based login and registration

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 + Vite | UI framework and build tool |
| Tailwind CSS v4 | Styling |
| Redux Toolkit | Auth state management |
| React Router v7 | Client-side routing |
| Axios | HTTP requests |
| react-pdftotext | PDF text extraction for upload |
| react-hot-toast | Notifications |
| Lucide React | Icons |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express 5 | Server framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| Multer | File upload handling |
| Bcrypt | Password hashing |
| ImageKit | Profile image storage and background removal |
| Groq AI (OpenAI SDK) | Resume parsing and text enhancement |

---

## Project Structure

```
ResuMate/
├── client/                      # React frontend
│   └── src/
│       ├── Pages/
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── dashboard.jsx    # Resume list, create, upload
│       │   ├── ResumeBuilder.jsx
│       │   └── Preview.jsx      # Public resume view
│       ├── components/
│       │   ├── templates/
│       │   │   ├── ClassicTemplate.jsx
│       │   │   ├── ModernTemplate.jsx
│       │   │   ├── MinimalTemplate.jsx
│       │   │   └── MinimalImageTemplate.jsx
│       │   ├── PersonalInfoForm.jsx
│       │   ├── ProfessionalSummaryForm.jsx
│       │   ├── ExperienceForm.jsx
│       │   ├── EducationForm.jsx
│       │   ├── ProjectForm.jsx
│       │   ├── SkillsForm.jsx
│       │   ├── ColorPicker.jsx
│       │   └── TemplateSelector.jsx
│       └── configs/
│           └── api.js
│
└── server/                      # Express backend
    ├── controllers/
    │   ├── UserController.js
    │   ├── resumeController.js
    │   └── aiController.js
    ├── routes/
    │   ├── userRoutes.js
    │   ├── resumeRoutes.js
    │   └── aiRoutes.js
    ├── models/
    ├── middlewares/
    │   └── authMiddleware.js
    ├── configs/
    │   ├── db.js
    │   ├── ai.js
    │   └── multer.js
    └── server.js
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- [Groq API key](https://console.groq.com) (free)
- [ImageKit account](https://imagekit.io) (free tier)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ResuMate.git
cd ResuMate
```

### 2. Set up the server

```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder:

```env
MONGODB_URI = "your_mongodb_connection_string"
JWT_SECRET = "your_jwt_secret"
IMAGEKIT_PRIVATE_KEY = "your_imagekit_private_key"
OPENAI_API_KEY = "your_groq_api_key"
OPENAI_BASE_URL = "https://api.groq.com/openai/v1"
OPENAI_MODEL = "llama-3.1-8b-instant"
```

Start the server:

```bash
npm run server
```

Server runs on `http://localhost:3000`

### 3. Set up the client

```bash
cd client
npm install
```

Create a `.env` file in the `client/` folder:

```env
VITE_BASE_URL = "http://localhost:3000"
```

Start the client:

```bash
npm run dev
```

Client runs on `http://localhost:5173`

---

## API Endpoints

### Users
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/users/register` | No | Register a new user |
| POST | `/api/users/login` | No | Login and receive JWT |
| GET | `/api/users/data` | Yes | Get current user data |
| GET | `/api/users/resumes` | Yes | Get all resumes for user |

### Resumes
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/resumes/create` | Yes | Create a new resume |
| GET | `/api/resumes/get/:resumeId` | Yes | Get resume by ID |
| PUT | `/api/resumes/update` | Yes | Update resume data |
| DELETE | `/api/resumes/delete/:resumeId` | Yes | Delete a resume |
| GET | `/api/resumes/public/:resumeId` | No | View a public resume |

### AI
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/ai/upload-resume` | Yes | Parse PDF text into structured resume data |
| POST | `/api/ai/enhance-pro-sum` | Yes | AI-enhance a professional summary |
| POST | `/api/ai/enhance-job-desc` | Yes | AI-enhance a job description |

---

## Environment Variables

| Variable | Where | Description |
|---|---|---|
| `MONGODB_URI` | server | MongoDB connection string |
| `JWT_SECRET` | server | Secret key for JWT signing |
| `IMAGEKIT_PRIVATE_KEY` | server | ImageKit private key for image uploads |
| `OPENAI_API_KEY` | server | Groq API key |
| `OPENAI_BASE_URL` | server | `https://api.groq.com/openai/v1` |
| `OPENAI_MODEL` | server | e.g. `llama-3.1-8b-instant` |
| `VITE_BASE_URL` | client | Backend URL e.g. `http://localhost:3000` |

> ⚠️ Never commit your `.env` files. Make sure `.env` is in your `.gitignore`.
