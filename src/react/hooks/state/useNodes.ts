import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { Node } from "reactflow";
import { selectFlow } from "../../../data/selectors/app/selectFlow";
import useAppModel from "../../../data/store";

import { MutableHookResult } from "src/classes/react/StateHookResult";
import { setNodes } from "../../../data/setters/editor/setNodes";
import produce from "immer";

// Returns
// - the nodes of a specified flow with name flowName
// - a setter to set new nodes

export const useNodes = (
  flowName: string
): MutableHookResult<Node<CustomNodeData>[]> => {
  const nodes = useAppModel(
      (store) => selectFlow(flowName, store)?.editorModel.nodes
    ),
    setter = (nodes: Node<CustomNodeData>[]) => {
      useAppModel.setState(
        produce((draft) => setNodes(nodes, flowName, draft))
      );
    };
  return [nodes, setter];
};
