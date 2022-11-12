import React, { useMemo } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Connection,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { useFlowName } from "src/react/hooks/context/useFlowName";
import { useEdges } from "src/react/hooks/state/useEdges";
import { useFlow } from "src/react/hooks/state/useFlow";
import { useNodes } from "src/react/hooks/state/useNodes";

import { canConnect } from "../classes/nodes/definition/io/handles/types/NodeHandleType";
import { selectNode } from "../data/selectors/editor/selectNode";
import { CustomNodeComponent } from "./nodes/CustomNode";

export const Editor = () => {
  const flowName = useFlowName();
  const [flow] = useFlow(flowName);

  const nodes = flow.editorModel.nodes;
  const setNodes = useNodes()[1];
  const edges = flow.editorModel.edges;
  const setEdges = useEdges()[1];

  const nodeTypes = useMemo(() => ({ custom: CustomNodeComponent }), []);

  console.log("Rendering Editor with nodes:", nodes);

  const handleConnect = (connection: Connection) => {
    const sourceNode = selectNode(connection.source, nodes);
    const targetNode = selectNode(connection.target, nodes);

    const sourceHandleType =
      sourceNode.data.definition.io.outputs[connection.sourceHandle].type;
    const targetHandleType =
      targetNode.data.definition.io.inputs[connection.targetHandle].type;
    if (
      sourceNode.id !== targetNode.id &&
      canConnect(sourceHandleType, targetHandleType)
    ) {
      const newEdges = addEdge(connection, edges);
      setEdges(newEdges);
    } else {
      console.log("Cannot connect", sourceHandleType, targetHandleType);
    }
  };

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={(nodeChanges) => {
        const newNodes = applyNodeChanges(nodeChanges, nodes);
        setNodes(newNodes);
      }}
      onEdgesChange={(edgeChanges) => {
        const newEdges = applyEdgeChanges(edgeChanges, edges);
        setEdges(newEdges);
      }}
      onConnect={handleConnect}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};
