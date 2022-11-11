import { Node } from "reactflow";

export const findNodeIndex = (id: string, nodes: Node[]): number => {
  return nodes.findIndex((n) => n.id === id);
};
