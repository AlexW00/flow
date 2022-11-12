import useAppModel from "../../../data/store";
import produce from "immer";
import { MutableHookResult } from "src/classes/react/StateHookResult";
import { CustomNodeDefinition } from "src/classes/nodes/definition/NodeDefinition";
import { setNodeDefinition } from "../../../data/setters/editor/setNodeDefinition";
import { useNode } from "./useNode";
import { useFlowName } from "../context/useFlowName";

export const useNodeDefinition = (
  nodeId: string
): MutableHookResult<CustomNodeDefinition> => {
  const flowName = useFlowName(),
    node = useNode(nodeId),
    definition = node?.data?.definition,
    setter = (definition: CustomNodeDefinition) =>
      useAppModel.setState(
        produce((draft) =>
          setNodeDefinition(definition, nodeId, flowName, draft)
        )
      );
  return [definition, setter];
};
