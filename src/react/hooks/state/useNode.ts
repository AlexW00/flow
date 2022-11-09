import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { selectNode } from "../../selectors/editor/selectNode";
import { Node } from "reactflow";
import { selectFlow } from "../../selectors/app/selectFlow";
import useAppModel from "../../store";

export const useNode = (
  nodeId: string,
  flowName: string
): Node<CustomNodeData> | undefined => {
  return useAppModel((store) =>
    selectNode(nodeId, selectFlow(flowName, store)?.editorModel.nodes)
  );
};
