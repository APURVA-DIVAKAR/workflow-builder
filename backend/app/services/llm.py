

import openai
from app.config import OPENAI_API_KEY


openai.api_key = OPENAI_API_KEY


def generate_answer(prompt: str):
    response = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
)
    return response.choices[0].message.content