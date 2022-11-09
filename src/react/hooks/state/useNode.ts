import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { selectNode } from "../../../data/selectors/editor/selectNode";
import { Node } from "reactflow";
import { selectFlow } from "../../../data/selectors/app/selectFlow";
import useAppModel from "../../../data/store";

export const useNode = (
  nodeId: string,
  flowName: string
): Node<CustomNodeData> | undefined => {
  const node = useAppModel((store) =>
    selectNode(nodeId, selectFlow(flowName, store)?.editorModel.nodes)
  );
  return node;
};
