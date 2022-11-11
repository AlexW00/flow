import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { Node, useReactFlow } from "reactflow";

export const useNode = (nodeId: string): Node<CustomNodeData> | undefined => {
  const node = useReactFlow().getNode(nodeId);
  return node;
};
