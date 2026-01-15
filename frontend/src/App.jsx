import { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const sendQuery = async () => {
    const res = await axios.post("http://localhost:8000/chat", {
      query: query
    });
    setAnswer(res.data.answer);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Workflow Builder Chat</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask something..."
        style={{ width: "300px", marginRight: "10px" }}
      />

      <button onClick={sendQuery}>Send</button>

      <div style={{ marginTop: "20px" }}>
        <strong>Answer:</strong>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;
