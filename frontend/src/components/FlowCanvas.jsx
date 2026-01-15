
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

export default function FlowCanvas({ nodes, edges, onNodesChange,onEdgesChange}){
    return(
        <ReactFlow 
            nodes={nodes}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onNodesChange={onNodesChange}
            fitView
        />
    );
}