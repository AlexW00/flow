import { Edge, useReactFlow } from "react-flow-renderer";

export const useEdge = (id: string): Edge => {
  const edge = useReactFlow().getEdge(id);
  return edge;
};
