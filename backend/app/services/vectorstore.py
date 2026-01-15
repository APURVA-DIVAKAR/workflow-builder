
import chromadb

client = chromadb.Client()
collection = client.get_or_create_collection("documents")

def add_texts(texts,embeddings):
    for i, emb in enumerate(embeddings):
        collection.add(
            ids=[str(i)],
            embeddings=[emb],
            documents=[texts[i]]
        )

def query(text_embedding):
    return collection.query(query_embeddings=[text_embedding],n_results=3)
