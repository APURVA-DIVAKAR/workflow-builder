# 🚀 Workflow Builder  
### Full-Stack Developer Assignment — **AI Planet**

---

## 📌 Project Overview

This project is a **No-Code / Low-Code Workflow Builder** built as part of a **Full-Stack Developer assignment for AI Planet**.

It demonstrates how AI workflows can be:
- Visually represented
- Orchestrated on the backend
- Safely executed with or without real AI models

The system models a simple but realistic AI workflow:

```
User Query → LLM Engine → Output
```

---

## 🧠 Design Philosophy 

AI Planet focuses on **AI experimentation, workflow orchestration, and modular pipelines**.  
This project is intentionally designed with **clear separation of concerns**:

| Layer | Responsibility |
|-----|----------------|
| Frontend | Workflow visualization + user interaction |
| Backend | Workflow orchestration + execution |
| AI Layer | Mocked by default, extensible to real models |

This mirrors real AI platforms where:
- UI defines workflows  
- Execution logic remains backend-controlled  
- AI models can be swapped without UI changes  

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- React Flow (workflow visualization)
- Axios

### Backend
- FastAPI
- **Python 3.11 (required)**
- Pydantic
- Modular service architecture

### AI Strategy
- Mocked responses by default
- Optional real AI via environment variables

### Tooling
- Swagger UI
- Docker & Docker Compose

---

## ✨ Features Implemented

### ✅ Backend
- `POST /chat` REST API
- Workflow orchestration layer
- Optional Knowledge Base toggle
- Safe fallback when AI keys are missing
- Swagger documentation

### ✅ Frontend
- Chat interface
- Workflow visualization (React Flow)
- Static workflow graph:
  - User Query
  - LLM Engine
  - Output
- Zoom & pan support
- Clean UI separation from backend logic

---

## 🤖 AI Execution Strategy 

### 🔹 Default Mode — Mocked AI 

- No API keys required
- Always returns a valid response
- Fully reproducible by reviewers

Example response:
```json
{
  "answer": "Mock response: workflow executed successfully"
}
```

### 🔹 Optional Mode — Real AI

If an AI key is provided, the backend **automatically switches** to real AI execution.

- No code changes needed  
- Safe environment-based configuration  

---

## ⚙️ Backend Setup

> ⚠️ **Python 3.11 is required**  
> (Python 3.12 / 3.14 are not supported due to dependency stability)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate     # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend URL:
```
http://127.0.0.1:8000
```

Swagger Documentation:
```
http://127.0.0.1:8000/docs
```

---

## ⚙️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:
```
http://localhost:5173
```

---

## 🔌 API Usage Example

**Endpoint:** `POST /chat`

```json
{
  "query": "What is workflow orchestration?",
  "use_kb": false
}
```

**Response (mocked by default):**
```json
{
  "answer": "[MOCKED AI RESPONSE]\nContext: \nQuestion: What is workflow orchestration?"
}
```

---

## 🔐 Environment Variables 

Create a `.env` file inside `backend/` :

```env
OPENAI_API_KEY=your_api_key_here
```

✔️ `.env` is already included in `.gitignore`

---

## 🐳 Docker Setup (Optional)

```bash
docker compose up --build
```

Runs:
- Backend API
- Database (if enabled)

---

## 🧪 Verification Checklist

- ✅ Backend starts without errors
- ✅ Swagger `/chat` endpoint works
- ✅ Frontend UI loads correctly
- ✅ Workflow visualization renders
- ✅ No AI key required to run
- ✅ No runtime crashes

---

## 📈 Future Improvements

Given more time, the system can be extended to:
- Drag-and-drop node creation
- Dynamic workflow execution from graph
- Node configuration panels
- Workflow persistence
- Multi-model AI selection

---

## 🎯 Why This Fits

This project demonstrates:
- Understanding of AI workflow orchestration
- Clean full-stack engineering
- Safe handling of AI credentials
- Extensible and production-ready architecture

---

## 👤 Author

**Apurva Divakar**  
Full-Stack Developer  

---

## ✅ Notes for Reviewers

- AI responses are mocked **by design**
- Repository is **safe to clone and run**
- Architecture supports real AI integration instantly
