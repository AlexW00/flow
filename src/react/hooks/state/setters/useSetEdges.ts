import produce from "immer";
import { Edge } from "react-flow-renderer";
import { Setter } from "src/classes/react/StateHookResult";
import { setEdges } from "../../../../data/setters/editor/setEdges";
import useAppModel from "../../../../data/store";
import { useFlowName } from "../../context/useFlowName";

export const useSetEdges = (): Setter<Edge[]> => {
  const flowName = useFlowName(),
    setter = (edges: Edge[]) => {
      useAppModel.setState(
        produce((draft) => setEdges(edges, flowName, draft))
      );
    };
  return setter;
};
