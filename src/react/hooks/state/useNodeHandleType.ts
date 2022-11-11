import useAppModel from "../../../data/store";
import produce from "immer";
import AppModel from "../../../data/models/AppModel";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import NodeHandleType from "src/classes/nodes/definition/io/handles/types/NodeHandleType";
import { setNodeHandleType } from "../../../data/setters/editor/setNodeHandleType";
import { useFlowName } from "../context/useFlowName";
import { useNodeHandle } from "./useNodeHandle";

export const useNodeHandleType = (
  isInput: boolean,
  name: string,
  nodeId: string
): MutableHookResult<NodeHandleType> => {
  const flowName = useFlowName(),
    [handle] = useNodeHandle(isInput, name, nodeId),
    type = handle?.type,
    setter = (type: NodeHandleType) =>
      useAppModel.setState(
        produce((draft: AppModel) =>
          setNodeHandleType(isInput, name, type, nodeId, flowName, draft)
        )
      );
  return [type, setter];
};
