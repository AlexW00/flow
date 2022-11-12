import useAppModel from "../../../data/store";
import produce from "immer";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import { setNodeHandles } from "../../../data/setters/editor/setNodeHandles";
import { NodeHandles } from "src/classes/nodes/definition/io/handles/NodeHandles";
import { selectNodeHandles } from "../../../data/selectors/editor/selectNodeHandles";
import { useFlowName } from "../context/useFlowName";
import { useNode } from "./useNode";

export const useNodeHandles = (
  isInput: boolean,
  nodeId: string
): MutableHookResult<NodeHandles> => {
  const flowName = useFlowName(),
    node = useNode(nodeId),
    handles = selectNodeHandles(isInput, node),
    setter = (handles: NodeHandles) =>
      useAppModel.setState(
        produce((draft) =>
          setNodeHandles(isInput, handles, nodeId, flowName, draft)
        )
      );
  return [handles, setter];
};
