import { Edge, useReactFlow } from "reactflow";

export const useEdge = (id: string): Edge => {
  const edge = useReactFlow().getEdge(id);
  return edge;
};
