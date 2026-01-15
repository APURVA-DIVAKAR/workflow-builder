from app.services.embeddings import embed_text
from app.services.vectorstore import query
from app.services.llm import generate_answer




def run_workflow(user_query: str, use_kb: bool):
    context = ""
    if use_kb:
        q_emb = embed_text(user_query)
        results = query(q_emb)
        context = " ".join(results["documents"][0])

    prompt = f"Context: {context}\nQuestion: {user_query}"
    return generate_answer(prompt)