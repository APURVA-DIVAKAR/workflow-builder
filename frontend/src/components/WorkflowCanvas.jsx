import React, { useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 50, y: 100 },
    data: {
      label: "User Query",
      type: "input",
      placeholder: "Enter your question",
    },
  },
  {
    id: "2",
    position: { x: 300, y: 100 },
    data: {
      label: "LLM Engine",
      type: "llm",
      model: "mock",
      useWeb: false,
    },
  },
  {
    id: "3",
    position: { x: 550, y: 100 },
    data: {
      label: "Output",
      type: "output",
      format: "text",
    },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

export default function WorkflowCanvas() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  const updateNodeData = (key, value) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === selectedNode.id
          ? { ...n, data: { ...n.data, [key]: value } }
          : n
      )
    );
    setSelectedNode((prev) => ({
      ...prev,
      data: { ...prev.data, [key]: value },
    }));
  };

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodeClick={(_, node) => setSelectedNode(node)}
      >
        <Background />
        <Controls />
      </ReactFlow>

      {/* CONFIG PANEL */}
      {selectedNode && (
        <div
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            width: "260px",
            background: "#fff",
            padding: "12px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          <h4>{selectedNode.data.label}</h4>

          {/* USER QUERY NODE */}
          {selectedNode.data.type === "input" && (
            <>
              <label>Placeholder</label>
              <input
                value={selectedNode.data.placeholder}
                onChange={(e) =>
                  updateNodeData("placeholder", e.target.value)
                }
                style={{ width: "100%", marginBottom: "8px" }}
              />
            </>
          )}

          {/* LLM NODE */}
          {selectedNode.data.type === "llm" && (
            <>
              <label>Model</label>
              <select
                value={selectedNode.data.model}
                onChange={(e) => updateNodeData("model", e.target.value)}
                style={{ width: "100%", marginBottom: "8px" }}
              >
                <option value="mock">Mock AI</option>
                <option value="openai">OpenAI</option>
                <option value="gemini">Gemini</option>
              </select>

              <label>
                <input
                  type="checkbox"
                  checked={selectedNode.data.useWeb}
                  onChange={(e) =>
                    updateNodeData("useWeb", e.target.checked)
                  }
                />{" "}
                Enable Web Search
              </label>
            </>
          )}

          {/* OUTPUT NODE */}
          {selectedNode.data.type === "output" && (
            <>
              <label>Output Format</label>
              <select
                value={selectedNode.data.format}
                onChange={(e) => updateNodeData("format", e.target.value)}
                style={{ width: "100%" }}
              >
                <option value="text">Text</option>
                <option value="markdown">Markdown</option>
                <option value="json">JSON</option>
              </select>
            </>
          )}
        </div>
      )}
    </div>
  );
}
