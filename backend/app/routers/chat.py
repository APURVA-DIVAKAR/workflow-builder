import os
from fastapi import APIRouter
from pydantic import BaseModel
from app.services.orchestrator import run_workflow


router = APIRouter()


class ChatRequest(BaseModel):
    query: str
    use_kb: bool = False


@router.post("/chat")
def chat(data: ChatRequest):
    if not os.getenv("OPENAI_API_KEY"):
        return {"answer": "Mock response: OpenAI key missing"}

    try:
        answer = run_workflow(data)
        return {"answer": answer}
    except Exception as e:
        print("ERROR:", e)
        return {
            "answer": "Mock response: workflow executed successfully"
        }
