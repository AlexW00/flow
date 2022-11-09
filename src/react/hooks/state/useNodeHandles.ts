import useAppModel from "../../../data/store";
import produce from "immer";
import AppModel from "../../../data/models/AppModel";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import { setNodeHandles } from "../../../data/setters/editor/setNodeHandles";
import { NodeHandles } from "src/classes/nodes/definition/io/handles/NodeHandles";
import { selectNodeHandles } from "../../../data/selectors/editor/selectNodeHandles";

export const useNodeHandles = (
  isInput: boolean,
  nodeId: string,
  flowName: string
): MutableHookResult<NodeHandles> => {
  const nodeDefinition = useAppModel((store) =>
      selectNodeHandles(isInput, nodeId, flowName, store)
    ),
    setter = (handles: NodeHandles) =>
      useAppModel.setState(
        produce((draft: AppModel) =>
          setNodeHandles(isInput, handles, nodeId, flowName, draft)
        )
      );
  return [nodeDefinition, setter];
};
