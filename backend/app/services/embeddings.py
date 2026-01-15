

import openai
from app.config import OPENAI_API_KEY


openai.api_key = OPENAI_API_KEY


def embed_text(text: str):
    response = openai.embeddings.create(
        model="text-embedding-3-small",
        input=text
)
    
    return response.data[0].embedding