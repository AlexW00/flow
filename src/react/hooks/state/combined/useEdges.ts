import { Edge } from "react-flow-renderer";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import { useGetEdges } from "../getters/useGetEdges";
import { useSetEdges } from "../setters/useSetEdges";

export const useEdges = (): MutableHookResult<Edge[]> => {
  const edges = useGetEdges(),
    setter = useSetEdges();
  return [edges, setter];
};
