import os

def generate_answer(prompt: str) -> str:
    openai_key = os.getenv("OPENAI_API_KEY")

    if not openai_key:
        return f"[MOCKED AI RESPONSE]\n{prompt}"

    try:
        import openai
        openai.api_key = openai_key

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message["content"]

    except Exception as e:
        print("OPENAI ERROR:", e)
        return "[MOCKED AI RESPONSE] OpenAI failed"
