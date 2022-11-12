import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { Node } from "reactflow";
import useAppModel from "src/data/store";
import { selectNode } from "src/data/selectors/editor/selectNode";
import { selectFlow } from "src/data/selectors/app/selectFlow";
import { useFlowName } from "../context/useFlowName";

export const useNode = (nodeId: string): Node<CustomNodeData> | undefined => {
  const flowName = useFlowName(),
    node = useAppModel((state) =>
      selectNode(nodeId, selectFlow(flowName, state).editorModel.nodes)
    );
  return node;
};
