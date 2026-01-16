
import os
from app.services.embeddings import embed_text
from app.services.vectorstore import query
from app.services.llm import generate_answer


def run_workflow(user_query: str, use_kb: bool):
    """
    Executes workflow:
    - Optionally queries vector DB
    - Builds prompt
    - Uses real LLM if key exists, else mocked LLM
    """

    context = ""

    if use_kb:
        try:
            q_emb = embed_text(user_query)
            results = query(q_emb)

            if results and results.get("documents"):
                context = " ".join(results["documents"][0])
        except Exception as e:
            print("Vector DB error:", e)

    prompt = f"Context: {context}\nQuestion: {user_query}"

    return generate_answer(prompt)
