import produce from "immer";
import { Edge, useReactFlow } from "react-flow-renderer";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import { setEdges } from "../../../data/setters/editor/setEdges";
import useAppModel from "../../../data/store";
import { useFlowName } from "../context/useFlowName";

export const useEdges = (): MutableHookResult<Edge[]> => {
  const flowName = useFlowName(),
    edges = useReactFlow().getEdges();
  const setter = (edges: Edge[]) => {
    useAppModel.setState(produce((draft) => setEdges(edges, flowName, draft)));
  };
  return [edges, setter];
};
