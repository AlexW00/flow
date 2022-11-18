import React, { useMemo } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Controls,
  MiniMap,
} from "react-flow-renderer";
import { useEdges } from "src/react/hooks/state/combined/useEdges";
import { useNodes } from "src/react/hooks/state/combined/useNodes";

import { canConnect } from "../classes/nodes/definition/io/handles/types/NodeHandleType";
import { selectNode } from "../data/selectors/editor/selectNode";
import { CustomNodeContainer } from "./nodes/CustomNodeContainer";

export const Editor = () => {
  const [nodes, setNodes] = useNodes();
  const [edges, setEdges] = useEdges();

  const nodeTypes = useMemo(() => ({ custom: CustomNodeContainer }), []);

  console.log("Rendering Editor with nodes, edges:", nodes, edges);

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
      console.log("newEdges", newEdges);
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
