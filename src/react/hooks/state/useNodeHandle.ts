import useAppModel from "../../../data/store";
import produce from "immer";
import AppModel from "../../../data/models/AppModel";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import { NodeHandle } from "src/classes/nodes/definition/io/handles/NodeHandle";
import { setNodeHandle } from "../../../data/setters/editor/setNodeHandle";
import { selectNodeHandles } from "src/data/selectors/editor/selectNodeHandles";
import { useNode } from "./useNode";
import { useFlowName } from "../context/useFlowName";

export const useNodeHandle = (
  isInput: boolean,
  name: string,
  nodeId: string
): MutableHookResult<NodeHandle> => {
  const flowName = useFlowName(),
    node = useNode(nodeId),
    handles = selectNodeHandles(isInput, node),
    handle = handles?.[name],
    setter = (handle: NodeHandle) =>
      useAppModel.setState(
        produce((draft: AppModel) =>
          setNodeHandle(isInput, name, handle, nodeId, flowName, draft)
        )
      );
  return [handle, setter];
};
