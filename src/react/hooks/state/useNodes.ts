import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { Node, useReactFlow } from "reactflow";
import useAppModel from "../../../data/store";

import { MutableHookResult } from "src/classes/react/StateHookResult";
import { setNodes } from "../../../data/setters/editor/setNodes";
import produce from "immer";
import { useFlowName } from "../context/useFlowName";
import { selectFlow } from "src/data/selectors/app/selectFlow";

export const useNodes = (): MutableHookResult<Node<CustomNodeData>[]> => {
  const flowName = useFlowName(),
    nodes = useReactFlow().getNodes(),
    setter = (nodes: Node<CustomNodeData>[]) => {
      useAppModel.setState(
        produce((draft) => setNodes(nodes, selectFlow(flowName, draft)))
      );
    };
  return [nodes, setter];
};
