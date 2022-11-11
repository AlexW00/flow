import AppModel from "../../models/AppModel";
import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { Node } from "reactflow";

export const setNodes = (
  newNodes: Node<CustomNodeData>[],
  flowName: string,
  appModel: AppModel
): void => {
  const flow = appModel.flows.find((f) => f.name === flowName);
  flow.editorModel.nodes = newNodes;
};
