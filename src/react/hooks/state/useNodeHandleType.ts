import useAppModel from "../../../data/store";
import produce from "immer";
import AppModel from "../../../data/models/AppModel";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import { selectNodeHandles } from "../../../data/selectors/editor/selectNodeHandles";
import NodeHandleType from "src/classes/nodes/definition/io/handles/types/NodeHandleType";
import { setNodeHandleType } from "../../../data/setters/editor/setNodeHandleType";

export const useNodeHandleType = (
  isInput: boolean,
  name: string,
  nodeId: string,
  flowName: string
): MutableHookResult<NodeHandleType> => {
  const nodeDefinition = useAppModel((store) => {
      const handle = selectNodeHandles(isInput, nodeId, flowName, store)[name];
      return handle?.type;
    }),
    setter = (type: NodeHandleType) =>
      useAppModel.setState(
        produce((draft: AppModel) =>
          setNodeHandleType(isInput, name, type, nodeId, flowName, draft)
        )
      );
  return [nodeDefinition, setter];
};
