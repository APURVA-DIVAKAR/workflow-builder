# Workflow Builder – No-Code / Low-Code AI Workflow Platform

## 🚀 Overview
This project is a full-stack No-Code / Low-Code workflow builder that allows users to visually design intelligent AI workflows and interact with them via a chat interface.

Users can:
- Define workflows using modular components
- Ask questions through a chat UI
- Optionally use document knowledge + LLMs
- Get intelligent responses from the workflow

The system demonstrates orchestration, vector search, and LLM integration.

---

## 🏗️ Architecture

Frontend (React + Vite)
↓
FastAPI Backend (Workflow Orchestrator)
↓
Optional Knowledge Base (ChromaDB)
↓
LLM Engine (OpenAI / Gemini)
↓
Response → UI

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Flow (workflow canvas – optional UI extension)

### Backend
- FastAPI
- Python 3.11
- Uvicorn

### AI / Data
- OpenAI / Gemini (LLM)
- ChromaDB (Vector Store)
- PyMuPDF (Document parsing – optional)

### Database
- PostgreSQL

### DevOps
- Docker
- Docker Compose

---



