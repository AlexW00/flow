import { CustomNodeData } from "src/classes/nodes/CustomNodeData";
import { Node } from "react-flow-renderer";
import { deleteEdge } from "./deleteEdge";
import FlowModel from "src/data/models/FlowModel";

export const setNodes = (
  newNodes: Node<CustomNodeData>[],
  flow: FlowModel
): void => {
  const oldNodes = flow.editorModel.nodes;
  flow.editorModel.nodes = newNodes;

  const removedNodes = oldNodes.filter(
    (oldNode) => !newNodes.find((newNode) => newNode.id === oldNode.id)
  );

  removedNodes.forEach((removedNode) => {
    flow.editorModel.edges
      .filter(
        (edge) =>
          edge.source === removedNode.id || edge.target === removedNode.id
      )
      .forEach((edge) => deleteEdge(edge, flow.editorModel));
  });
};
