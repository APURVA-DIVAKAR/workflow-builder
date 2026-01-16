import React, { useState } from "react";
import axios from "axios";
import WorkflowCanvas from "./components/WorkflowCanvas";

export default function App() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const sendQuery = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        query: query,
        use_kb: false,
      });

      setAnswer(res.data.answer);
    } catch (err) {
      console.error(err);
      setAnswer("Error contacting backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* LEFT PANEL — CHAT */}
      <div
        style={{
          width: "360px",
          borderRight: "1px solid #ddd",
          padding: "16px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        <h2>Workflow Builder Chat</h2>

        <textarea
          rows={4}
          placeholder="Ask something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            resize: "none",
          }}
        />

        <button
          onClick={sendQuery}
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          {loading ? "Sending..." : "Send"}
        </button>

        <div style={{ marginTop: "16px" }}>
          <strong>Answer:</strong>
          <div
            style={{
              marginTop: "8px",
              padding: "10px",
              minHeight: "60px",
              background: "#f7f7f7",
              whiteSpace: "pre-wrap",
            }}
          >
            {answer || "—"}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — WORKFLOW */}
      <div style={{ flex: 1 }}>
        <WorkflowCanvas />
      </div>
    </div>
  );
}
