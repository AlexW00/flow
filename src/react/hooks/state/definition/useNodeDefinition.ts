import { MutableHookResult } from "src/classes/react/StateHookResult";
import { CustomNodeDefinition } from "src/classes/nodes/definition/NodeDefinition";
import { useNode } from "../useNode";
import { useSetNodeDefinition } from "./useSetNodeDefinition";

export const useNodeDefinition = (
  nodeId: string
): MutableHookResult<CustomNodeDefinition> => {
  const node = useNode(nodeId),
    definition = node?.data?.definition,
    setter = useSetNodeDefinition(nodeId);
  return [definition, setter];
};
