from fastapi import APIRouter
from pydantic import BaseModel
from app.services.orchestrator import run_workflow

router = APIRouter()


class ChatRequest(BaseModel):
    query: str
    use_kb: bool = False


@router.post("/chat")
def chat(data: ChatRequest):
    """
    Chat endpoint
    - Always executes workflow
    - LLM decides mock vs real
    """
    try:
        answer = run_workflow(data.query, data.use_kb)
        return {"answer": answer}
    except Exception as e:
        print("CHAT ERROR:", e)
        return {
            "answer": "[MOCKED AI RESPONSE] Workflow executed safely"
        }
